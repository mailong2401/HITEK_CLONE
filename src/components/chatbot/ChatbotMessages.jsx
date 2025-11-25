import React from 'react';
import MessageBubble from './MessageBubble';
import LoadingDots from './LoadingDots';

const ChatbotMessages = ({ 
  messagesRef, 
  isSearching, 
  messages, 
  currentQuestions, 
  handleQuestionClick, 
  isLoading 
}) => {
  return (
    <div 
      ref={messagesRef} 
      className={`flex-1 p-4 overflow-y-auto transition-opacity ${
        isSearching ? 'opacity-40' : 'opacity-100'
      }`}
    >
      {messages.length === 0 && currentQuestions.length > 0 && !isSearching ? (
        <WelcomeMessage 
          currentQuestions={currentQuestions} 
          handleQuestionClick={handleQuestionClick} 
        />
      ) : (
        <MessagesList messages={messages} isLoading={isLoading} />
      )}
    </div>
  );
};

const WelcomeMessage = ({ currentQuestions, handleQuestionClick }) => (
  <div className="text-center text-gray-500 dark:text-gray-400">
    <p className="mb-4">Xin chào! Tôi có thể giúp gì cho bạn?</p>
    <div className="space-y-2">
      {currentQuestions.map(q => (
        <button 
          key={q.id} 
          onClick={() => handleQuestionClick(q)}
          className="w-full text-left p-2 bg-gray-100 dark:bg-gray-700 rounded hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
        >
          {q.question_text}
        </button>
      ))}
    </div>
  </div>
);

const MessagesList = ({ messages, isLoading }) => (
  <>
    {messages.map(message => (
      <MessageBubble key={message.id} message={message} />
    ))}
    {isLoading && <LoadingDots />}
  </>
);

export default ChatbotMessages;