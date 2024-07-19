"use client"
import React, { useState } from 'react';

interface ChatbotProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, toggleOpen }) => {
  if (!isOpen) return null;
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<string[]>([]);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, message]);
      setMessage('');
    }
  };

  return (
    <div className="flex flex-col fixed bottom-16 right-4 bg-white border border-gray-300 shadow-lg rounded-lg w-96 h-96 p-4 text-black duration-300 -translate-y-4">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold">Big C AI 🐻</h2>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={toggleOpen}
        >
          X
        </button>
      </div>
      <div className="flex-1 overflow-y-auto mb-2">
        <div className="flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <div key={index} className="bg-gray-100 p-2 rounded-lg">
              {msg}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center border-t pt-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 p-2 border border-gray-300 rounded-lg resize-none"
          rows={1}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
