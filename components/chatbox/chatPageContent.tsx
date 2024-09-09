'use client';
import Bubble from '@/components/bubble';
import {
  Message,
  setIsShowTutorial,
  setMessages,
  setIsBotResponseNeeded,
} from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import {
  hello,
  chat_hello,
  promptTutorial,
  botMessages,
  userMessages,
  handleSelectBot,
} from '@/utils/global';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PromptBox from '../promptBox';
import DeleteChatConfirm from '../warning/deleteChat';

const ChatPageContent: React.FC = () => {
  const dispatch = useDispatch();

  const isShowTutorial = useSelector((state: RootState) => state.messages.isShowTutorial);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const isBotResponseNeeded = useSelector((state: RootState) => state.messages.isBotResponseNeeded);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSelectPrompt = async (prompt: string) => {
    dispatch(setMessages([...messages, { isBot: false, text: prompt, code: 100 } as Message]));
    dispatch(setIsShowTutorial(false));
    dispatch(setIsBotResponseNeeded(true));
  };

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    scrollToBottom();
    setTimeout(() => {
      scrollToBottom();
    }, 1100);
  }, [messages]);

  useEffect(() => {
    if (!isBotResponseNeeded || messages.length === 0) return;

    const lastMessage = messages[messages.length - 1];
    const response = handleSelectBot(lastMessage?.text);
    dispatch(setMessages([...messages, { isBot: true, text: '', code: response } as Message]));
    dispatch(setIsBotResponseNeeded(false));
  }, [isBotResponseNeeded, messages]);

  return (
    <div
      className={`flex flex-col ${isShowTutorial ? 'items-center justify-center' : 'overflow-y-auto'} overflow-x-hidden md:h-[70vh] md:p-4`}
    >
      {isShowTutorial ? (
        <div className="flex flex-col items-center">
          <h1 className="w-full text-center text-2xl font-bold">{chat_hello}</h1>
          <h2 className="text-center text-xl md:pt-2">
            👋 บิ๊กซีสวัสดีค่ะ! ยินดีต้อนรับสู่บิ๊กซีออนไลน์ 🎉 ไม่ว่าคุณจะมองหาสินค้าราคาพิเศษ 📦
            หรือกำลังติดปัญหาในการสั่งซื้อ 🛒 ฉันพร้อมช่วยคุณทุกขั้นตอนค่ะ!
          </h2>

          <div className="mt-2 grid grid-cols-2 justify-center gap-3 px-4 md:mt-16 md:mt-8 md:grid-cols-4">
            {promptTutorial?.map((prompt, idx) => {
              return (
                <PromptBox
                  promptKey={idx}
                  text={prompt}
                  onClick={() => handleSelectPrompt(prompt)}
                />
              );
            })}
          </div>
        </div>
      ) : (
        <>
          <div className="flex flex-col space-y-2">
            {messages.map((message, seqIndex) => (
              <Bubble bubbleKey={seqIndex} isBot={message.isBot} key={seqIndex}>
                {message.isBot && message.code !== 100 ? botMessages(message.code) : message.text}
              </Bubble>
            ))}
            <div ref={messagesEndRef} />
          </div>
        </>
      )}
      <DeleteChatConfirm />
    </div>
  );
};

export default ChatPageContent;
