import Image from 'next/image';
import React from 'react';
import buddyIcon from '../public/buddy.png';

interface FloatingButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const FloatingButton: React.FC<FloatingButtonProps> = ({ isOpen, onClick }) => {
  return (
    <div className="group fixed bottom-16 right-4 transform transition-transform duration-300 md:bottom-4">
      {/* <button
        // ${isOpen ? '-translate-y-[79vh] md:translate-y-0 md:-translate-x-[92vw]' : 'translate-x-0'}
        className={`transform transition-transform duration-300
          bg-[#daa006] hover:bg-yellow-600 text-white text-shadow font-bold px-6 py-4 rounded-full shadow-xl ${
          isOpen ? '' : 'group-hover:animate-none animate-bounceTwice'
        } h-12 flex items-center justify-center`}
        onClick={onClick}
      > */}
      <button
        className={`rounded-full bg-[#fddb02] p-2 ${
          isOpen ? '' : 'animate-bounceTwice group-hover:animate-none'
        }`}
        onClick={onClick}
      >
        {/* {isOpen ? '🏠' : 'Chat with BearBuddy AI 🐻'} */}
        <Image src={buddyIcon} alt="buddy icon" width={48} height={48} />
      </button>
    </div>
  );
};

export default FloatingButton;
