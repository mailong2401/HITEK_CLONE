import React, { useState, useEffect, useRef } from 'react';
import { createClient, SupabaseClient } from '@supabase/supabase-js';

// Types
interface PresetQuestion {
  id: string;
  question_text: string;
  category?: string;
  display_order: number;
  is_active: boolean;
  parent_id?: string;
  is_final?: boolean;
}

interface ChatResponse {
  id: string;
  question_id: string;
  response_text: string;
  keywords?: string[];
}

interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface QuestionHistory {
  level: number;
  parentQuestionId?: string;
  parentQuestionText?: string;
}

// Supabase configuration for Vite
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_PUBLISHABLE_DEFAULT_KEY;

console.log('🔧 Supabase Config:', {
  url: supabaseUrl ? '✅ Loaded' : '❌ Missing',
  key: supabaseKey ? '✅ Loaded' : '❌ Missing'
});

const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);

const Chatbox: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [presetQuestions, setPresetQuestions] = useState<PresetQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [inputMessage, setInputMessage] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [questionHistory, setQuestionHistory] = useState<QuestionHistory[]>([{ level: 0 }]);
  const [currentLevel, setCurrentLevel] = useState<number>(0);
  const [isQuestionsExpanded, setIsQuestionsExpanded] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Filter questions based on search term
  const filteredQuestions = presetQuestions.filter(question =>
    question.question_text.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Initialize chat
  useEffect(() => {
    const initializeChat = async () => {
      console.log('🚀 Initializing chat...');
      
      if (!supabaseUrl || !supabaseKey) {
        const errorMsg = '❌ Supabase environment variables are missing';
        console.error(errorMsg);
        setError(errorMsg);
        return;
      }

      try {
        // Test connection
        const { data, error: testError } = await supabase
          .from('preset_questions')
          .select('*')
          .limit(1);

        if (testError) {
          console.error('❌ Supabase connection failed:', testError);
          setError(`Kết nối thất bại: ${testError.message}`);
          return;
        }

        console.log('✅ Supabase connected successfully');
        await loadPresetQuestions();
        
        // Add welcome message
        setMessages([
          {
            text: 'Xin chào! Tôi có thể giúp gì cho bạn? Hãy chọn một câu hỏi bên dưới hoặc nhập câu hỏi của bạn.',
            sender: 'bot',
            timestamp: new Date()
          }
        ]);

      } catch (err) {
        console.error('❌ Initialization error:', err);
        setError('Lỗi khởi tạo hệ thống');
      }
    };

    initializeChat();
  }, []);
  // Hàm xử lý scroll ngang bằng wheel
  const handleQuestionsWheel = (e: React.WheelEvent<HTMLDivElement>): void => {
    const container = e.currentTarget;
    container.scrollLeft += e.deltaY;
  };
  // Scroll to bottom when messages change
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  // Prevent body scroll when mouse is inside chatbox
  const handleMouseEnter = () => {
    document.body.style.overflow = 'hidden';
  };

  const handleMouseLeave = () => {
    document.body.style.overflow = 'auto';
  };

  const loadPresetQuestions = async (parentId?: string): Promise<void> => {
    try {
      console.log('📥 Loading preset questions...', { parentId });
      
      let query = supabase
        .from('preset_questions')
        .select('*')
        .eq('is_active', true)
        .order('display_order');

      if (parentId) {
        query = query.eq('parent_id', parentId);
      } else {
        query = query.is('parent_id', null);
      }

      const { data, error } = await query;

      if (error) {
        console.error('❌ Error loading questions:', error);
        setError(`Lỗi tải câu hỏi: ${error.message}`);
        return;
      }
      
      console.log(`✅ Loaded ${data?.length || 0} questions`);
      setPresetQuestions(data || []);

    } catch (error) {
      console.error('❌ Error in loadPresetQuestions:', error);
      setError('Lỗi tải danh sách câu hỏi');
    }
  };
  // Ẩn nút điều hướng khi đang nhập
    const [showNavigation, setShowNavigation] = useState<boolean>(true);

    useEffect(() => {
      if (inputMessage.trim() !== '') {
        setShowNavigation(false);
      } else {
        setShowNavigation(true);
      }
    }, [inputMessage]);
  const goBackToPreviousLevel = async (): Promise<void> => {
  if (currentLevel <= 0) return;

  const newHistory = [...questionHistory];
  newHistory.pop(); // Remove current level
  
  const previousLevel = newHistory[newHistory.length - 1];
  setQuestionHistory(newHistory);
  setCurrentLevel(previousLevel.level);
  
  // Load questions for previous level
  await loadPresetQuestions(previousLevel.parentQuestionId);
  
  // LUÔN MỞ DANH SÁCH CÂU HỎI KHI QUAY LẠI
  setIsQuestionsExpanded(true);
};

  const sendPresetQuestion = async (questionId: string, questionText: string, isFinal: boolean = false): Promise<void> => {
    if (error) {
      addMessage("Hệ thống đang gặp lỗi. Vui lòng thử lại sau.", 'bot');
      return;
    }

    console.log(`📤 Sending preset question: ${questionText}`, { isFinal });
    
    // Add user message
    addMessage(questionText, 'user');
    setIsLoading(true);

    try {
      // Get response from Supabase
      const { data: responses, error } = await supabase
        .from('chat_responses')
        .select('response_text')
        .eq('question_id', questionId);

      if (error) {
        console.error('❌ Error fetching response:', error);
        throw error;
      }

      let responseText = "Xin lỗi, tôi chưa có câu trả lời cho câu hỏi này.";
      
      if (responses && responses.length > 0) {
        responseText = responses[0].response_text;
        console.log('✅ Found response');
      }

      // Simulate typing delay
      setTimeout(async () => {
        addMessage(responseText, 'bot');
        setIsLoading(false);
        
        // Save to chat history
        saveChatHistory(questionText, responseText);

        // If this is not a final question, load sub-questions
        if (!isFinal) {
          const newLevel = currentLevel + 1;
          setQuestionHistory(prev => [...prev, { 
            level: newLevel, 
            parentQuestionId: questionId,
            parentQuestionText: questionText
          }]);
          setCurrentLevel(newLevel);
          await loadPresetQuestions(questionId);
        }
      }, 1000);

    } catch (error) {
      console.error('❌ Error in sendPresetQuestion:', error);
      addMessage("Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.", 'bot');
      setIsLoading(false);
    }
  };

  const sendCustomMessage = async (): Promise<void> => {
    const message = inputMessage.trim();
    
    if (!message || isLoading) return;
    
    if (error) {
      addMessage("Hệ thống đang gặp lỗi. Vui lòng thử lại sau.", 'bot');
      return;
    }

    console.log(`📤 Sending custom message: "${message}"`);
    
    addMessage(message, 'user');
    setInputMessage('');
    setIsLoading(true);

    try {
      // Find best matching response using keywords
      const { data: responses, error } = await supabase
        .from('chat_responses')
        .select('response_text, keywords')
        .not('keywords', 'is', null);

      if (error) {
        console.error('❌ Error searching responses:', error);
        throw error;
      }

      let bestResponse = "Xin lỗi, tôi không hiểu câu hỏi của bạn. Vui lòng thử lại với cách diễn đạt khác hoặc chọn một câu hỏi từ danh sách bên dưới.";
      let bestMatchScore = 0;

      if (responses && responses.length > 0) {
        responses.forEach((response) => {
          if (response.keywords) {
            const score = calculateMatchScore(message.toLowerCase(), response.keywords);
            if (score > bestMatchScore) {
              bestMatchScore = score;
              bestResponse = response.response_text;
            }
          }
        });
        
        console.log(`🎯 Best match score: ${bestMatchScore}`);
      }

      // Respond after delay
      setTimeout(() => {
        addMessage(bestResponse, 'bot');
        setIsLoading(false);
        
        // Save to chat history
        saveChatHistory(message, bestResponse);
      }, 1000);

    } catch (error) {
      console.error('❌ Error in sendCustomMessage:', error);
      addMessage("Xin lỗi, đã có lỗi xảy ra. Vui lòng thử lại sau.", 'bot');
      setIsLoading(false);
    }
  };

  const calculateMatchScore = (message: string, keywords: string[]): number => {
    let score = 0;
    const messageWords = message.toLowerCase().split(' ');
    
    keywords.forEach(keyword => {
      if (message.includes(keyword.toLowerCase())) {
        score += 1;
      }
    });
    
    return score / keywords.length;
  };

  const addMessage = (text: string, sender: 'user' | 'bot'): void => {
    const newMessage: ChatMessage = {
      text,
      sender,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const saveChatHistory = async (userMessage: string, botResponse: string): Promise<void> => {
    try {
      const sessionId = generateSessionId();
      const { error } = await supabase
        .from('chat_history')
        .insert([
          {
            user_message: userMessage,
            bot_response: botResponse,
            session_id: sessionId
          }
        ]);

      if (error) {
        console.error('❌ Error saving chat history:', error);
      }
    } catch (error) {
      console.error('❌ Error in saveChatHistory:', error);
    }
  };

  const generateSessionId = (): string => {
    return 'session_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === 'Enter') {
      sendCustomMessage();
    }
  };

  const toggleChatbox = (): void => {
    setIsOpen(!isOpen);
  };

  const clearError = (): void => {
    setError('');
  };

  const resetToMainMenu = async (): Promise<void> => {
  setQuestionHistory([{ level: 0 }]);
  setCurrentLevel(0);
  await loadPresetQuestions();
  // LUÔN MỞ DANH SÁCH CÂU HỎI KHI VỀ TRANG CHỦ
  setIsQuestionsExpanded(true);
};

  // Get current parent question text for display
  const getCurrentParentText = (): string => {
    if (currentLevel === 0) return 'Câu hỏi thường gặp';
    const currentHistory = questionHistory[questionHistory.length - 1];
    return currentHistory.parentQuestionText || 'Menu';
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Floating Chat Button */}
      <button
        onClick={toggleChatbox}
        className={`fixed bottom-6 right-6 w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-300 ${
          isOpen ? 'hover:scale-100' : 'hover:scale-110'
        } flex items-center justify-center pointer-events-auto z-50`}
      >
        <i className="fas fa-comments text-xl"></i>
        <span className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></span>
      </button>

      {/* Chatbox Container */}
      <div
        ref={chatContainerRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className={`fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 transform ${
          isOpen
            ? 'scale-100 opacity-100 pointer-events-auto'
            : 'scale-0 opacity-0 pointer-events-none'
        } origin-bottom-right z-40`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-500 text-white p-4 rounded-t-2xl flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                🤖
              </div>
              <span className={`absolute bottom-0 right-0 w-3 h-3 rounded-full border-2 border-blue-600 ${
                error ? 'bg-red-400' : 'bg-green-400'
              }`}></span>
            </div>
            <div>
              <h3 className="font-semibold text-lg">Trợ lý ảo</h3>
              <p className="text-blue-100 text-sm">
                {error ? 'Đang gặp lỗi' : 'Đang trực tuyến'}
              </p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="w-8 h-8 hover:bg-white/20 rounded-full transition-colors flex items-center justify-center"
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        {/* Messages Container */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-3 mb-4">
              <div className="flex justify-between items-start">
                <p className="text-red-800 text-sm">{error}</p>
                <button
                  onClick={clearError}
                  className="text-red-600 hover:text-red-800 ml-2"
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          )}

          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex items-start space-x-3 ${
                message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
              }`}
            >
              {/* Avatar */}
              {message.sender === 'user' ? (
                <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                  🧑
                </div>
              ) : (
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                  🤖
                </div>
              )}

              {/* Message Bubble */}
              <div
                className={`${
                  message.sender === 'user'
                    ? 'bg-blue-600 text-white rounded-2xl rounded-br-none'
                    : 'bg-white rounded-2xl rounded-tl-none border border-gray-100'
                } px-4 py-3 shadow-sm max-w-[80%]`}
              >
                <p className={`break-words whitespace-pre-line ${
                  message.sender === 'bot' ? 'text-gray-800' : 'text-white'
                }`}>{message.text}</p>
                <p className={`text-xs mt-1 ${
                  message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                }`}>
                  {message.timestamp.toLocaleTimeString('vi-VN', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          
          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                <i className="fas fa-robot text-blue-600 text-sm"></i>
              </div>
              <div className="bg-white rounded-2xl rounded-tl-none px-4 py-3 shadow-sm border border-gray-100">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
          
          <div ref={messagesEndRef} />
        </div>

        {/* Preset Questions Section - Chiếm toàn bộ không gian */}
        <div className="border-t border-gray-200 bg-white">
          {/* Questions List - Chiếm hết khối */}
          {isQuestionsExpanded && filteredQuestions.length > 0 && (
            <div className="p-4 h-20">
              <div 
                className="flex space-x-2 overflow-x-auto h-full items-center scrollbar-hide"
                onWheel={handleQuestionsWheel}
              >
                {!isLoading && filteredQuestions.map((question) => (
                  <button
                    key={question.id}
                    onClick={() => sendPresetQuestion(question.id, question.question_text, question.is_final)}
                    disabled={isLoading || !!error}
                    className={`flex-shrink-0 text-sm px-4 py-2 rounded-xl transition-colors duration-200 border ${
                      question.is_final 
                        ? 'bg-green-50 hover:bg-green-100 text-green-700 border-green-200' 
                        : 'bg-blue-50 hover:bg-blue-100 text-blue-700 border-blue-200'
                    } disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed whitespace-nowrap`}
                  >
                    {question.question_text}
                    {question.is_final && (
                      <span className="ml-1">🚩</span>
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* No Results Message */}
          {isQuestionsExpanded && presetQuestions.length > 0 && filteredQuestions.length === 0 && searchTerm && (
            <div className="p-4 h-20 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Không tìm thấy câu hỏi phù hợp với "{searchTerm}"</p>
            </div>
          )}

          {/* No Questions Message */}
          {isQuestionsExpanded && presetQuestions.length === 0 && !error && (
            <div className="p-4 h-20 flex items-center justify-center">
              <p className="text-gray-500 text-sm">Không có câu hỏi nào trong danh mục này.</p>
            </div>
          )}
        </div>

        {/* Input Area với Navigation Buttons */}
        <div className="p-4 border-t border-gray-200 bg-white rounded-b-2xl">
          <div className="flex space-x-2 items-center">
            {/* Navigation Buttons - Bên trái */}
          {showNavigation && (
            <div className="flex space-x-2">
              {/* Back Button - Luôn hiện nhưng disabled khi ở level 0 */}
              <button
                onClick={goBackToPreviousLevel}
                disabled={isLoading || currentLevel <= 0}
                className="w-10 h-10 bg-orange-100 hover:bg-orange-200 text-orange-600 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                title="Quay lại"
              >
                ←
              </button>
              
              {/* Home Button - Luôn hiện nhưng disabled khi ở level 0 */}
              <button
                onClick={resetToMainMenu}
                disabled={isLoading || currentLevel <= 0}
                className="w-10 h-10 bg-purple-100 hover:bg-purple-200 text-purple-600 rounded-lg transition-colors duration-200 flex items-center justify-center text-sm disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed"
                title="Về trang chủ"
              >
                🏠
              </button>
            </div>
          )}

            {/* Input Field - Chiếm phần còn lại */}
            <div className="flex-1 flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => {
                  setInputMessage(e.target.value);
                  setSearchTerm(e.target.value);
                }}
                onKeyPress={handleKeyPress}
                placeholder={error ? "Hệ thống đang gặp lỗi..." : "Nhập để tìm kiếm hoặc hỏi..."}
                disabled={isLoading || !!error}
                className="flex-1 border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
              />
              <button
                onClick={sendCustomMessage}
                disabled={!inputMessage.trim() || isLoading || !!error}
                className="w-12 h-12 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white rounded-2xl transition-all duration-200 flex items-center justify-center"
              >
                ➤
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chatbox;