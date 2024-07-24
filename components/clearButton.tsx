import { setMessages } from '@/redux/reducers/messagesReducer';
import React from 'react';
import { useDispatch } from 'react-redux';

interface ClearButtonProps {
  isOpen: boolean;
}

const ClearButton: React.FC<ClearButtonProps> = ({ isOpen }) => {
  const dispatch = useDispatch();
  
  const handleClearMessages = () => {
    dispatch(setMessages([]));
  };

  return (
    <div className="group fixed bottom-24 md:bottom-4 right-4 transform transition-transform duration-300 -translate-y-[4rem]">
      <button
        className={`transform transition-transform duration-300 ${
          isOpen ? '-translate-y-[79vh] md:translate-y-0 md:-translate-x-[92vw] opacity-100' : 'opacity-0 pointer-events-none'
        } bg-gray-500 hover:bg-gray-600 text-white text-shadow font-bold px-6 py-4 rounded-full shadow-xl
        h-12 flex items-center justify-center`}
        onClick={handleClearMessages}
      >
        🗑️
      </button>
    </div>
  );
};

export default ClearButton;
