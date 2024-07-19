"use client"
import React from 'react';

interface ChatbotProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ isOpen, toggleOpen }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed bottom-16 right-4 bg-white border border-gray-300 shadow-lg rounded-lg w-80 h-96 p-4">
      <div className="flex justify-between items-center border-b pb-2 mb-2">
        <h2 className="text-lg font-semibold">Chatbot</h2>
        <button
          className="text-red-500 hover:text-red-700"
          onClick={toggleOpen}
        >
          X
        </button>
      </div>
      <div className="h-full overflow-y-auto">
        {/* Chatbot content goes here */}
        <p>Your chatbot interface...</p>
      </div>
    </div>
  );
};

export default Chatbot;
