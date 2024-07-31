"use client"
import Bubble from '@/components/bubble';
import { setIsShowTutorial, setMessage, setMessages } from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import { hello, promptTutorial } from '@/utils/global';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PromptBox from '../promptBox';
import DeleteChatConfirm from '../warning/deleteChat';

const ChatPageContent: React.FC = () => {
  const dispatch = useDispatch();

  const [botIndex, setBotIndex] = useState(0);
  const botMessages = [
    "บีเจซีบิ๊กซีสวัสดีค่ะ คุณต้องการความช่วยเหลือด้านใด",
    "กรุณารอสักครู่",
  ];
  const isShowTutorial = useSelector((state: RootState) => state.messages.isShowTutorial);
  const message = useSelector((state: RootState) => state.messages.message);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = { text: message, isBot: false };
      const placeholderMessage = { text: '', isBot: true };
      const updatedMessages = [...messages, userMessage, placeholderMessage];
      
      dispatch(setMessages(updatedMessages));
      dispatch(setMessage(""));
      setIsShowTutorial(false);
      
      setTimeout(() => {
        const botResponse = botMessages[botIndex % botMessages.length];
        const updatedMessagesWithBot = updatedMessages.map(msg => 
          msg.text === '' ? { text: botResponse, isBot: true } : msg
        );
        dispatch(setMessages(updatedMessagesWithBot));
        setBotIndex(botIndex + 1);
      }, 700);
    }
  };  

  const handleSelectPrompt = async (prompt: string) => {
    dispatch(setMessage(prompt));
    dispatch(setIsShowTutorial(false));
  }

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    handleSendMessage();
  }, [isShowTutorial])

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className={`flex flex-col ${isShowTutorial ? "justify-center items-center" : "overflow-y-auto"} md:h-[70vh] md:p-4 overflow-x-hidden`}>
      {isShowTutorial ? (
        <div className="flex flex-col items-center">
          <h1 className="w-full text-2xl text-center font-bold">
            {hello}
          </h1>
          <h2 className="md:pt-2 text-xl text-center">
            บริการแชทบอต AI เพื่อช่วยตอบคำถามด้านการใช้งานหรือเลือกซื้อสินค้าของท่าน
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 justify-center w-full mt-2 md:mt-8 md:mt-16 px-4 gap-3">
            {promptTutorial?.map((prompt, idx) => {
              return (
                <PromptBox key={idx} text={prompt} onClick={() => handleSelectPrompt(prompt)}/>
              )
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col space-y-2">
            {messages.map((msg, index) => (
              <Bubble key={`bubble-${index}`} text={msg.text} isBot={msg.isBot}/>
            ))}
          </div>
          
          <div ref={messagesEndRef} />
        </>
      )}

      
      <DeleteChatConfirm/>
    </div>
  );
};

export default ChatPageContent;
