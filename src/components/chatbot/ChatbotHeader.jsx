import React from 'react';
import { ArrowLeft, Home, Minimize2, X } from 'lucide-react';

const ChatbotHeader = ({ 
  questionHistory, 
  messages, 
  goBack, 
  resetToRoot, 
  setIsOpen 
}) => {
  return (
    <div className="p-4 bg-blue-600 text-white rounded-t-lg flex justify-between items-center">
      <div className="flex items-center gap-2">
        {(questionHistory.length > 0 || messages.length > 0) && (
          <>
            <button 
              onClick={goBack} 
              className="p-1 hover:bg-blue-500 rounded transition-colors"
              title="Quay lại"
            >
              <ArrowLeft size={16} />
            </button>
            <button 
              onClick={resetToRoot} 
              className="p-1 hover:bg-blue-500 rounded transition-colors"
              title="Về trang chủ"
            >
              <Home size={16} />
            </button>
          </>
        )}
        <h3 className="font-semibold">Hitek Assistant</h3>
      </div>
      <div className="flex gap-2">
        <button 
          onClick={() => setIsOpen(false)} 
          className="p-1 hover:bg-blue-500 rounded transition-colors"
        >
          <Minimize2 size={16} />
        </button>
        <button 
          onClick={() => setIsOpen(false)} 
          className="p-1 hover:bg-blue-500 rounded transition-colors"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatbotHeader;