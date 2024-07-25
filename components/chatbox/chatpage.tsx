"use client"
import { setIsChatOpen } from '@/redux/reducers/globalReducer';
import { setMessage, setMessages } from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import { useIsSmallScreen } from '@/utils/isSmallScreen';
import { Drawer, Modal } from 'antd';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatPageContent from './chatPageContent';
import MessageBox from './message_box';


interface ChatPageProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const ChatPage: React.FC<ChatPageProps> = ({ isOpen, toggleOpen }) => {
  const dispatch = useDispatch();

  const toggleChatClose = () => {
    dispatch(setIsChatOpen(false));
  };
  
  const [botIndex, setBotIndex] = useState(0);
  const botMessages = [
    "บีเจซีบิ๊กซีสวัสดีค่ะ คุณต้องการความช่วยเหลือด้านใด",
    "กรุณารอสักครู่",
  ];
  const [isShowTutorial, setIsShowTutorial] = useState(true);
  // const [isSmallScreen, setIsSmallScreen] = useState(false);
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

  const isSmallScreen = useIsSmallScreen();

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
    <div>
      {!isSmallScreen ? (
        <Modal
          open={isOpen}
          onCancel={toggleChatClose}
          title="Buddy AI"
          centered
          width="70%"
          footer={[<MessageBox handleSendMessage={handleSendMessage}/>]}
          className="hidden md:block"
          style={{ fontFamily: 'Noto Sans Thai, sans-serif' }}
        >
          <ChatPageContent/>
        </Modal>
      ) : (
        <Drawer
          open={isOpen}
          placement="bottom"
          closable={true}
          onClose={toggleChatClose}
          title="Buddy AI"
          height={"90vh"}
          footer={[<MessageBox handleSendMessage={handleSendMessage} />]}
          style={{ fontFamily: 'Noto Sans Thai, sans-serif' }}
        >
          <ChatPageContent />
        </Drawer>
      )}
    </div>
  );
};

export default ChatPage;
