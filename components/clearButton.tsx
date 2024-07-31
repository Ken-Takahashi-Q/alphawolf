import { setIsShowDeleteChatConfirm } from '@/redux/reducers/globalReducer';
import React from 'react';
import { useDispatch } from 'react-redux';

const ClearButton: React.FC = () => {
  const dispatch = useDispatch();
  
  const handleClearMessages = () => {
    dispatch(setIsShowDeleteChatConfirm(true));
  };

  return (
    <div className="group duration-200">
      <button
        className={`flex items-center justify-center w-10 h-10 duration-200 bg-gray-200 hover:bg-gray-300
        text-white font-bold p-4 rounded-full`}
        onClick={handleClearMessages}
      >
        🗑️
      </button>
    </div>
  );
};

export default ClearButton;
