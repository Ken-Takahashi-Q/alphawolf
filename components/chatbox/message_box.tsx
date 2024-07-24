"use client"
import { setMessage } from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import React, { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonPrimary from '../button/buttonPrimary';

interface MessageBoxProps {
  handleSendMessage: () => void;
}

const autoResize = (element: HTMLElement) => {
  element.style.height = 'auto';
  element.style.height = `${element.scrollHeight}px`;
};

const MessageBox: React.FC<MessageBoxProps> = ({ handleSendMessage } ) => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.messages.message);
  const textareaRef = useRef(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex w-full justify-center">
      <div className="flex items-center w-full md:w-[50%] px-2 py-1 gap-2 bg-gray-100 rounded-xl">
        <textarea
          className="w-full p-2 bg-transparent outline-none border border-transparent focus:border-transparent focus:ring-0 overflow-hidden resize-none"
          value={message}
          onChange={(e) => {
            dispatch(setMessage(e.target.value));
            autoResize(e.target);
          }}
          placeholder="Type your message..."
          onKeyDown={handleKeyDown}
          rows={1}
          ref={textareaRef}
        />
        <ButtonPrimary text="Send" onClick={handleSendMessage}/>
      </div>
    </div>
  );
};

export default MessageBox;
