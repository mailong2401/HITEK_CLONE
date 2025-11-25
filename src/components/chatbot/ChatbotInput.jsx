import React from 'react';
import { Send, Search } from 'lucide-react';
import SearchPopup from './SearchPopup';

const ChatbotInput = ({
  input,
  setInput,
  handleInputChange,
  handleSubmit,
  isLoading,
  inputRef,
  isSearching,
  setIsSearching,
  popupRef,
  recentSearches,
  searchResults,
  searchQuestions,
  clearRecentSearches,
  handleQuestionClick,
  highlight
}) => {
  const handleInputFocus = () => {
    if (input.trim() || recentSearches.length > 0) {
      setIsSearching(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 border-t border-gray-200 dark:border-gray-700 relative">
      <div className="flex space-x-2">
        <div className="flex-1 relative">
          <input 
            ref={inputRef}
            value={input} 
            onChange={handleInputChange}
            onFocus={handleInputFocus}
            placeholder="Nhập câu hỏi hoặc tìm kiếm..." 
            className="w-full p-2 pr-8 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white text-sm"
            disabled={isLoading}
          />
          <Search className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400" size={16}/>
          
          
        </div>
        <button 
          type="submit" 
          disabled={!input.trim() || isLoading}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors flex-shrink-0"
        >
          <Send size={16}/>
        </button>
      </div>
    </form>
  );
};

export default ChatbotInput;