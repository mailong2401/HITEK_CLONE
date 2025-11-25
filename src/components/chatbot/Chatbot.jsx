import React, { useState, useRef, useEffect } from 'react';
import { useChatbot } from '@/contexts/ChatbotContext';
import { MessageCircle } from 'lucide-react';

// Import components
import ChatbotHeader from '@/components/chatbot/ChatbotHeader';
import ChatbotMessages from '@/components/chatbot/ChatbotMessages';
import ChatbotInput from '@/components/chatbot/ChatbotInput';
import SearchPopup from '@/components/chatbot/SearchPopup'

const Chatbot = () => {
  const {
    isOpen, setIsOpen, messages, sendMessage, isLoading, currentQuestions,
    handleQuestionClick, goBack, resetToRoot, questionHistory,
    searchQuestions, searchResults, isSearching, setIsSearching,
    recentSearches, clearRecentSearches
  } = useChatbot();

  const [input, setInput] = useState('');
  const messagesRef = useRef(null);
  const inputRef = useRef(null);
  const popupRef = useRef(null);

  // Scroll to bottom
  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages]);

  // Click outside popup
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target) &&
          inputRef.current && !inputRef.current.contains(e.target)) {
        setIsSearching(false);
      }
    };
    
    if (isSearching) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearching]);

  const handleInputChange = (e) => {
    const val = e.target.value;
    setInput(val);
    
    if (val.trim()) {
      searchQuestions(val);
      setIsSearching(true);
    } else {
      setIsSearching(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage(input.trim());
    setInput('');
    setIsSearching(false);
  };

  const highlight = (text, term) => {
    if (!term) return text;
    const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
    return text.split(regex).map((p, i) => 
      regex.test(p) ? (
        <span key={i} className="bg-yellow-200 dark:bg-yellow-600 px-1 rounded font-medium">
          {p}
        </span>
      ) : p
    );
  };

  if (!isOpen) return (
    <button 
      onClick={() => setIsOpen(true)} 
      className="fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg z-50 transition-all duration-300"
    >
      <MessageCircle size={24} />
    </button>
  );

  return (
    <div className="fixed bottom-6 right-6 w-80 h-96 bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col border border-gray-200 dark:border-gray-700 z-50">
      <ChatbotHeader
        questionHistory={questionHistory}
        messages={messages}
        goBack={goBack}
        resetToRoot={resetToRoot}
        setIsOpen={setIsOpen}
      />
      

      <ChatbotMessages
        messagesRef={messagesRef}
        isSearching={isSearching}
        messages={messages}
        currentQuestions={currentQuestions}
        handleQuestionClick={handleQuestionClick}
        isLoading={isLoading}
        
      />

      <ChatbotInput
        input={input}
        setInput={setInput}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        inputRef={inputRef}
        isSearching={isSearching}
        setIsSearching={setIsSearching}
        popupRef={popupRef}
        recentSearches={recentSearches}
        searchResults={searchResults}
        searchQuestions={searchQuestions}
        clearRecentSearches={clearRecentSearches}
        handleQuestionClick={handleQuestionClick}
        highlight={highlight}
      />
    </div>
  );
};

export default Chatbot;