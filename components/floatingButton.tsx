import React from 'react';

interface FloatingButtonProps {
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ onClick }) => {
  return (
    <button
      className="fixed bottom-4 right-4 bg-[#daa006] hover:bg-yellow-700 text-white text-shadow font-bold px-6 py-4 rounded-full shadow-xl duration-300 animate-bounceTwice"
      onClick={onClick}
    >
      Chat with Big C AI 🐻
    </button>
  );
};

export default FloatingButton;
