import React, { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '@/lib/supabase';

const ChatbotContext = createContext();

export const useChatbot = () => {
  const context = useContext(ChatbotContext);
  if (!context) throw new Error('useChatbot must be used within ChatbotProvider');
  return context;
};

export const ChatbotProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentQuestions, setCurrentQuestions] = useState([]);
  const [questionHistory, setQuestionHistory] = useState([]);
  const [allQuestions, setAllQuestions] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);
  const [recentSearches, setRecentSearches] = useState([]);

  // Load all questions from Supabase when chatbot opens
  useEffect(() => {
    if (isOpen) {
      loadAllQuestions();
      loadRootQuestions();
    }
  }, [isOpen]);

  useEffect(() => {
    const saved = localStorage.getItem('chatbot_recent_searches');
    if (saved) setRecentSearches(JSON.parse(saved));
  }, []);

  const saveToRecent = (term) => {
    if (!term.trim()) return;
    const updated = [term, ...recentSearches.filter(s => s !== term)].slice(0,5);
    setRecentSearches(updated);
    localStorage.setItem('chatbot_recent_searches', JSON.stringify(updated));
  };

  const loadAllQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('chatbot_questions')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      setAllQuestions(data || []);
    } catch {
      setAllQuestions(sampleQuestions); // fallback sample data
    }
  };

  const loadRootQuestions = async () => {
    try {
      const { data, error } = await supabase
        .from('chatbot_questions')
        .select('*')
        .is('parent_id', null)
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      setCurrentQuestions(data || []);
      setQuestionHistory([]);
    } catch {
      setCurrentQuestions(sampleQuestions);
    }
  };

  const loadChildQuestions = async (parentId) => {
    setIsLoading(true);
    try {
      const { data, error } = await supabase
        .from('chatbot_questions')
        .select('*')
        .eq('parent_id', parentId)
        .eq('is_active', true)
        .order('display_order', { ascending: true });
      if (error) throw error;
      if (data?.length) {
        setCurrentQuestions(data);
        setQuestionHistory(prev => [...prev, parentId]);
      }
    } catch {
      // fallback: empty
      setCurrentQuestions([]);
    } finally {
      setIsLoading(false);
    }
  };

  const searchQuestions = async (term) => {
    const searchTerm = term.toLowerCase().trim();
    if (!searchTerm) return setSearchResults([]);
    setIsSearching(true);
    try {
      const { data, error } = await supabase
        .from('chatbot_questions')
        .select('*')
        .eq('is_active', true)
        .or(`question_text.ilike.%${searchTerm}%,answer_text.ilike.%${searchTerm}%`)
        .order('display_order', { ascending: true })
        .limit(8);
      if (error) throw error;
      setSearchResults(data || []);
    } catch {
      const localResults = allQuestions.filter(q =>
        q.question_text.toLowerCase().includes(searchTerm) ||
        (q.answer_text && q.answer_text.toLowerCase().includes(searchTerm))
      ).slice(0, 8);
      setSearchResults(localResults);
    }
  };

  const handleQuestionClick = async (question) => {
    const userMessage = { id: Date.now(), text: question.question_text, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setSearchResults([]);
    setIsSearching(false);

    if (question.answer_text && !question.is_category) {
      setTimeout(() => {
        const botMessage = { id: Date.now()+1, text: question.answer_text, sender: 'bot', timestamp: new Date() };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }, 500);
    }

    if (question.is_category || !question.answer_text) {
      await loadChildQuestions(question.id);
    }
  };

  const goBack = async () => {
    if (!questionHistory.length) return loadRootQuestions();
    const newHistory = [...questionHistory]; newHistory.pop();
    const prevId = newHistory[newHistory.length-1];
    if (prevId) await loadChildQuestions(prevId);
    else await loadRootQuestions();
    setQuestionHistory(newHistory);
  };

  const resetToRoot = () => {
    loadRootQuestions();
    setMessages([]);
    setSearchResults([]);
    setIsSearching(false);
  };

  const sendMessage = async (message) => {
    const userMessage = { id: Date.now(), text: message, sender: 'user', timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setIsLoading(true);
    setSearchResults([]);
    setIsSearching(false);
    saveToRecent(message);

    setTimeout(() => {
      const found = allQuestions.find(q => q.question_text.toLowerCase().includes(message.toLowerCase()));
      if (found) handleQuestionClick(found);
      else {
        const botMessage = { id: Date.now()+1, text: 'Xin lỗi, tôi không hiểu câu hỏi này.', sender: 'bot', timestamp: new Date() };
        setMessages(prev => [...prev, botMessage]);
        setIsLoading(false);
      }
    }, 800);
  };

  const clearRecentSearches = () => {
    setRecentSearches([]);
    localStorage.removeItem('chatbot_recent_searches');
  };

  const value = {
    isOpen, setIsOpen, messages, sendMessage, isLoading, currentQuestions,
    handleQuestionClick, goBack, resetToRoot, questionHistory,
    searchQuestions, searchResults, isSearching, setIsSearching,
    recentSearches, saveToRecent, clearRecentSearches
  };

  return <ChatbotContext.Provider value={value}>{children}</ChatbotContext.Provider>;
};

// Sample fallback questions
const sampleQuestions = [
  { id:'1', question_text:'Xin chào! Tôi có thể giúp gì cho bạn?', is_category:true, display_order:1, parent_id:null },
  { id:'2', question_text:'Dịch vụ của chúng tôi', answer_text:'Chúng tôi cung cấp: Phát triển phần mềm, Thiết kế web, Tư vấn công nghệ.', is_category:false, display_order:2, parent_id:null },
  { id:'3', question_text:'Liên hệ', answer_text:'Email: contact@hitek.com | Hotline: 0123-456-789', is_category:false, display_order:3, parent_id:null }
];
