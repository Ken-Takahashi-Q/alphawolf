"use client"
import { setMessage } from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSend from '../button/buttonSend';
import ClearButton from '../clearButton';

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
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
      if (textareaRef.current) {
        autoResize(textareaRef.current);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setMessage(e.target.value));
    if (textareaRef.current) {
      autoResize(textareaRef.current);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      autoResize(textareaRef.current);
    }
  }, [message]);

  return (
    <div className="flex w-full justify-center pb-6 md:pb-0">
      <div className="flex items-center w-full md:w-[50%] px-2 py-1 gap-2 bg-gray-100 rounded-xl">
        <ClearButton/>
        <textarea
          className="w-full p-2 bg-transparent outline-none border border-transparent focus:border-transparent focus:ring-0 overflow-hidden resize-none"
          value={message}
          onChange={handleChange}
          placeholder="พิมพ์ข้อความ..."
          onKeyDown={handleKeyDown}
          rows={1}
          ref={textareaRef}
        />
        <ButtonSend text="Send" onClick={handleSendMessage}/>
      </div>
    </div>
  );
};

export default MessageBox;
