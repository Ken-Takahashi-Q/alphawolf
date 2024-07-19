"use client"
import React, { useState } from 'react';

interface ChatbotProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, toggleOpen }) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);
  const [botIndex, setBotIndex] = useState(0);
  const botMessages = [
    "บีเจซีบิ๊กซีสวัสดีค่ะ คุณต้องการความช่วยเหลือด้านใด",
    "กรุณารอสักครู่",
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isBot: false }]);
      setMessage('');
      setTimeout(() => {
        const botResponse = botMessages[botIndex % botMessages.length];
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, isBot: true },
        ]);
        setBotIndex(botIndex + 1);
      }, 800);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <div className={`flex flex-col fixed bottom-4 w-[40%] h-[95%] p-4 bg-slate-200 border border-gray-300 shadow-xl rounded-lg text-black duration-300 right-0 ${isOpen ? '' : 'translate-x-[100%]'}`}>
      <div className="flex justify-between items-center w-full border-b pb-2 mb-2 border-b-1 border-gray-300">
        <h2 className="text-lg font-semibold">Big C AI 🐻</h2>
        <button
          className="text-gray-500 hover:text-red-700 text-2xl"
          onClick={toggleOpen}
        >
          ×
        </button>
      </div>
      <div className="flex-1 mb-2 overflow-y-auto">
        <div className="flex flex-col space-y-2">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`w-fit max-w-full px-4 py-2 rounded-xl ${
                msg.isBot ? 'bg-white text-black ml-auto' : 'bg-green-500 text-white mr-auto'
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center border-t pt-2">
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-full max-h-24 overflow-auto"
          rows={1}
          onKeyDown={handleKeyDown}
        />
        <button
          onClick={handleSendMessage}
          className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg duration-100"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
