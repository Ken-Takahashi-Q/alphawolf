import React from 'react';

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ isOpen, onClick }) => {
  return (
    <button
      className={`fixed bottom-4 ${isOpen ? "left-[43%]" : "right-4"} bg-[#daa006] hover:bg-yellow-700 text-white text-shadow font-bold px-6 py-4 rounded-full shadow-xl duration-300 ${isOpen ? "" : "animate-bounceTwice"}`}
      onClick={onClick}
    >
      Chat with Big C AI 🐻
    </button>
  );
};

export default FloatingButton;
