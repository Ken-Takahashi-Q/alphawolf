"use client"
import React, { useState } from 'react';

const ChatSidebar: React.FC = () => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);
  const [botIndex, setBotIndex] = useState(0);

  return (
    <div className={`flex flex-col w-[20%] h-full p-4 bg-gray-400 0 shadow-xl text-black duration-300 right-0}`}>
      <h2 className="p-2 mb-4 text-lg font-semibold border-b border-gray-500">Big C AI 🐻</h2>
      Sidebar
    </div>
  );
};

export default ChatSidebar;
