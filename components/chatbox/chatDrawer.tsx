// 'use client';
// import Bubble from '@/components/bubble';
// import { setIsChatOpen } from '@/redux/reducers/globalReducer';
// import { setMessage, setMessages } from '@/redux/reducers/messagesReducer';
// import { RootState } from '@/redux/store/reducers';
// import { chat_hello, promptTutorial } from '@/utils/global';
// import { Drawer, DrawerProps } from 'antd';
// import React, { useEffect, useRef, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import PromptBox from '../promptBox';

// interface ChatDrawerProps {
//   isOpen: boolean;
//   toggleOpen: () => void;
// }

// const ChatDrawer: React.FC<ChatDrawerProps> = ({ isOpen, toggleOpen }) => {
//   const dispatch = useDispatch();

//   const toggleChatClose = () => {
//     dispatch(setIsChatOpen(false));
//   };

//   const [botIndex, setBotIndex] = useState(0);
//   const botMessages = ['บีเจซีบิ๊กซีสวัสดีค่ะ คุณต้องการความช่วยเหลือด้านใด', 'กรุณารอสักครู่'];
//   const [isShowTutorial, setIsShowTutorial] = useState(true);
//   const message = useSelector((state: RootState) => state.messages.message);
//   const messages = useSelector((state: RootState) => state.messages.messages);
//   const messagesEndRef = useRef<HTMLDivElement>(null);

//   const handleSendMessage = () => {
//     if (message.trim()) {
//       const userMessage = { text: message, isBot: false };
//       const placeholderMessage = { text: '', isBot: true };
//       const updatedMessages = [...messages, userMessage, placeholderMessage];

//       dispatch(setMessages(updatedMessages));
//       dispatch(setMessage(''));
//       setIsShowTutorial(false);

//       setTimeout(() => {
//         const botResponse = botMessages[botIndex % botMessages.length];
//         const updatedMessagesWithBot = updatedMessages.map((msg) =>
//           msg.text === '' ? { text: botResponse, isBot: true } : msg,
//         );
//         dispatch(setMessages(updatedMessagesWithBot));
//         setBotIndex(botIndex + 1);
//       }, 700);
//     }
//   };

//   const handleSelectPrompt = async (prompt: string) => {
//     dispatch(setMessage(prompt));
//     setIsShowTutorial(false);
//   };

//   const scrollToBottom = () => {
//     if (messagesEndRef.current) {
//       messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   useEffect(() => {
//     handleSendMessage();
//   }, [isShowTutorial]);

//   useEffect(() => {
//     scrollToBottom();
//   }, [messages]);

//   const [open, setOpen] = useState(false);
//   const [placement, setPlacement] = useState<DrawerProps['placement']>('bottom');

//   const showDrawer = () => {
//     setOpen(true);
//   };

//   const onClose = () => {
//     setOpen(false);
//   };

//   return (
//     <Drawer
//       open={isOpen}
//       placement="bottom"
//       closable={true}
//       onClose={toggleChatClose}
//       title="BearBuddy AI"
//       // height="90vh"
//       style={{ fontFamily: 'Noto Sans Thai, sans-serif' }}
//     >
//       <div
//         className={`flex flex-col ${isShowTutorial ? 'items-center justify-center' : 'overflow-y-auto'} h-[70vh] overflow-x-hidden p-4`}
//       >
//         {isShowTutorial ? (
//           <div className="flex flex-col items-center">
//             <h1 className="w-full text-center text-2xl font-bold">{chat_hello}</h1>
//             <h2 className="pt-4 text-center text-xl">
//               บริการแชทบอต AI เพื่อช่วยตอบคำถามด้านการใช้งานหรือเลือกซื้อสินค้าของท่าน
//             </h2>

//             <div className="mt-8 grid w-full grid-cols-2 justify-center gap-3 px-4 md:mt-16 md:grid-cols-4 lg:w-[70%]">
//               {promptTutorial?.map((prompt, idx) => {
//                 return (
//                   <PromptBox key={idx} text={prompt} onClick={() => handleSelectPrompt(prompt)} />
//                 );
//               })}
//             </div>
//           </div>
//         ) : (
//           <>
//             <div className="flex flex-col space-y-2">
//               {messages.map((msg, index) => (
//                 <Bubble bubbleKey={index} isBot={msg.isBot}>
//                   abc
//                 </Bubble>
//               ))}
//             </div>

//             <div ref={messagesEndRef} />
//           </>
//         )}
//       </div>
//     </Drawer>
//   );
// };

// export default ChatDrawer;
