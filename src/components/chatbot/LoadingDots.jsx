import React from 'react';

const LoadingDots = () => {
  return (
    <div className="flex justify-start">
      <div className="bg-gray-100 dark:bg-gray-700 p-2 rounded-bl-none flex space-x-1">
        <span 
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
        ></span>
        <span 
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
          style={{ animationDelay: '0.1s' }}
        ></span>
        <span 
          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" 
          style={{ animationDelay: '0.2s' }}
        ></span>
      </div>
    </div>
  );
};

export default LoadingDots;