import React from 'react';

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ isOpen, onClick }) => {
  return (
    <div className="group fixed bottom-24 md:bottom-4 right-4 transform transition-transform duration-300">
      <button
        className={`transform transition-transform duration-300 ${
          isOpen ? '-translate-y-[79vh] md:translate-y-0 md:-translate-x-[92vw]' : 'translate-x-0'
        } bg-[#daa006] hover:bg-yellow-600 text-white text-shadow font-bold px-6 py-4 rounded-full shadow-xl ${
          isOpen ? '' : 'group-hover:animate-none animate-bounceTwice'
        } h-12 flex items-center justify-center`}
        onClick={onClick}
      >
        {isOpen ? '🏠' : 'Chat with Big C AI 🐻'}
      </button>
    </div>
  );
};

export default FloatingButton;
