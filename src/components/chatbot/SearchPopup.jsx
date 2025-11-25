import React from 'react';
import { Clock, ChevronRight, Search } from 'lucide-react';

const SearchPopup = ({
  popupRef,
  input,
  recentSearches,
  searchResults,
  setInput,
  searchQuestions,
  inputRef,
  clearRecentSearches,
  handleQuestionClick,
  highlight
}) => {
  return (
    <div 
      ref={popupRef} 
      className="absolute bottom-full left-0 right-0 mb-2 max-h-80 overflow-y-auto bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-lg shadow-2xl z-50"
    >
      {/* Recent searches */}
      {!input.trim() && recentSearches.length > 0 && (
        <RecentSearchesSection
          recentSearches={recentSearches}
          setInput={setInput}
          searchQuestions={searchQuestions}
          inputRef={inputRef}
          clearRecentSearches={clearRecentSearches}
        />
      )}

      {/* Search results */}
      {input.trim() && searchResults.length > 0 && (
        <SearchResultsSection
          searchResults={searchResults}
          input={input}
          handleQuestionClick={handleQuestionClick}
          highlight={highlight}
        />
      )}

      {/* No results */}
      {input.trim() && searchResults.length === 0 && (
        <NoResultsSection />
      )}

      {/* Empty state */}
      {!input.trim() && recentSearches.length === 0 && (
        <EmptyStateSection />
      )}
    </div>
  );
};

const RecentSearchesSection = ({
  recentSearches,
  setInput,
  searchQuestions,
  inputRef,
  clearRecentSearches
}) => (
  <div className="p-3 border-b border-gray-200 dark:border-gray-700">
    <div className="flex justify-between items-center mb-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <Clock size={14} /> Tìm kiếm gần đây
      </span>
      <button
        onClick={clearRecentSearches}
        className="text-xs text-gray-500 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
      >
        Xóa tất cả
      </button>
    </div>
    <div className="space-y-2">
      {recentSearches.map((search, index) => (
        <button
          key={index}
          onClick={() => {
            setInput(search);
            searchQuestions(search);
            setTimeout(() => inputRef.current?.focus(), 100);
          }}
          className="w-full text-left p-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-700 rounded flex items-center justify-between transition-colors"
        >
          <span className="flex items-center gap-2">
            <Clock size={12} className="text-gray-400" />
            {search}
          </span>
          <ChevronRight size={12} className="text-gray-400" />
        </button>
      ))}
    </div>
  </div>
);

const SearchResultsSection = ({ searchResults, input, handleQuestionClick, highlight }) => (
  <div className="p-3">
    <div className="mb-2">
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 flex items-center gap-2">
        <Search size={14} />
        Kết quả tìm kiếm cho "{input}"
      </span>
    </div>
    <div className="space-y-2">
      {searchResults.map(question => (
        <button
          key={question.id}
          onClick={() => handleQuestionClick(question)}
          className="w-full text-left p-2 rounded hover:bg-blue-50 dark:hover:bg-blue-900/20 border border-gray-200 dark:border-gray-700 transition-colors"
        >
          {highlight(question.question_text, input)}
        </button>
      ))}
    </div>
  </div>
);

const NoResultsSection = () => (
  <div className="p-4 text-center text-gray-500 dark:text-gray-400">
    <Search size={32} className="mx-auto mb-2 text-gray-400" />
    <p className="text-sm">Không tìm thấy kết quả</p>
  </div>
);

const EmptyStateSection = () => (
  <div className="p-4 text-center text-gray-500 dark:text-gray-400">
    <Search size={32} className="mx-auto mb-2 text-gray-400" />
    <p className="text-sm">Nhập từ khóa để tìm kiếm</p>
  </div>
);

export default SearchPopup;