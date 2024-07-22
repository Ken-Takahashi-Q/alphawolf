"use client"
import Bubble from '@/components/bubble';
import React, { useEffect, useState } from 'react';
import ButtonPrimary from '../button/buttonPrimary';
import ChatSidebar from './sidebar';

interface ChatPageProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const ChatPage: React.FC<ChatPageProps> = ({ isOpen, toggleOpen }) => {
  const hello = "Welcome to Big C AI, your personal shopping assistant 🐻";
  const promptTutorial = [
    "มีโปรโมชั่นใดแนะนำบ้าง",
    "ฉันต้องการจัดงานวันเกิดลูกสาวอายุ 5 ขวบ แนะนำสินค้าใดบ้าง",
    "10 อันดับสินค้าขายดีในเดือนนี้",
    "ติดตามสถานะคำสั่งซื้อของฉัน",
  ]
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<{ text: string; isBot: boolean }[]>([]);
  const [botIndex, setBotIndex] = useState(0);
  const botMessages = [
    "บีเจซีบิ๊กซีสวัสดีค่ะ คุณต้องการความช่วยเหลือด้านใด",
    "กรุณารอสักครู่",
  ];
  const [isFirstEnter, setIsFirstEnter] = useState(true);

  const handleSendMessage = () => {
    if (message.trim()) {
      setMessages([...messages, { text: message, isBot: false }]);
      setMessage('');
      setMessages(prevMessages => [
        ...prevMessages,
        { text: '', isBot: true },
      ]);

      setIsFirstEnter(false);
      setTimeout(() => {
        const botResponse = botMessages[botIndex % botMessages.length];
        setMessages(prevMessages => [
          ...prevMessages.slice(0, -1),
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

  const handleSelectPrompt = async (prompt: string) => {
    setMessage(prompt);
    setIsFirstEnter(false);
  }

  useEffect(() => {
    handleSendMessage();
  }, [isFirstEnter])

  return (
    <div className={`fixed bottom-0 flex flex-col w-[92vw] h-full bg-gray-300 text-black border border-gray-300 rounded-lg shadow-xl duration-300 right-0 ${isOpen ? '' : 'translate-x-[100%]'}`}>
      {/* <div className="flex justify-between items-center w-full px-4 py-2 border-b-1 border-gray-300">
        <button
          className="text-gray-500 hover:text-red-700 text-2xl"
          onClick={toggleOpen}
        >
          ×
        </button>
      </div> */}
      <div className="flex h-full">
        <ChatSidebar/>
        {isFirstEnter ? (
          <div className="flex flex-col justify-between w-full h-full overflow-y-auto">
            <div className="p-4">
              <h1 className="pt-4 w-full text-2xl text-center font-bold">{hello}</h1>
              <h2 className="pt-4 w-full text-xl text-center">บริการแชทบอต AI เพื่อช่วยตอบคำถามด้านการใช้งานหรือเลือกซื้อสินค้าของท่าน</h2>
              
              <div className="flex w-full justify-center mt-16 gap-8">
                {promptTutorial.map((prompt, idx) => {
                  return (
                    // <PromptBox key={`prompt-box-${idx}`} text={prompt} image=""/>
                    <button
                      className={`w-36 h-36 p-4 text-left border border-black rounded-xl duration-300 hover:bg-gray-200`}
                      key={`prompt-box-${idx}`}
                      onClick={() => handleSelectPrompt(prompt)}
                    >
                      {prompt}
                    </button>
                  )
                })}
                </div>
            </div>

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
          </div>
        ) : (
          <div className="flex flex-col justify-between w-full h-full overflow-y-auto">
            <div className="p-4">
              <div className={`w-fit max-w-full px-4 py-2 rounded-xl bg-white text-black mr-auto}`}>
                {hello}
              </div>
              <div className="flex flex-col space-y-2">
                {messages.map((msg, index) => (
                  <Bubble key={`bubble-${index}`} text={msg.text} isBot={msg.isBot}/>
                ))}
              </div>
            </div>
            
            <div className="flex items-center w-full border-t px-4 py-2 bg-gray-300">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default ChatPage;
