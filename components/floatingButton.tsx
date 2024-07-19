import React, { useState } from 'react';

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ isOpen, onClick }) => {
  const [isChatOpenText, setIsChatOpenText] = useState("");

  return (
    <button
      className={`fixed bottom-4 transform transition-transform duration-300 ${
        isOpen ? 'right-4 -translate-x-[600px]' : 'right-4'
      } bg-[#daa006] hover:bg-yellow-600 text-white text-shadow font-bold px-6 py-4 rounded-full shadow-xl ${
        isOpen ? '' : 'animate-bounceTwice'
      }`}
      onClick={onClick}
    >
      {
        isOpen ?
        "🐻" :
        "Chat with Big C AI 🐻"
      }
    </button>
  );
};

export default FloatingButton;
