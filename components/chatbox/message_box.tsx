"use client"
import React, { useState } from 'react';
import ButtonPrimary from '../button/buttonPrimary';

interface MessageBoxProps {
  handleSendMessage: () => void;
}

const MessageBox: React.FC<MessageBoxProps> = ({ handleSendMessage } ) => {
  const [message, setMessage] = useState('');

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className="flex items-center w-full border-t px-4 py-2">
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Type your message..."
        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg max-h-24 overflow-auto"
        rows={1}
        onKeyDown={handleKeyDown}
      />
      <ButtonPrimary text="Send" onClick={handleSendMessage}/>
    </div>
  );
};

export default MessageBox;
