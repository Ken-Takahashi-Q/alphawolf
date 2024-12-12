'use client';
import { setIsChatOpen, setBotIndex } from '@/redux/reducers/globalReducer';
import {
  setIsShowTutorial,
  setMessage,
  setMessages,
  setIsBotResponseNeeded,
} from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import { useIsSmallScreen } from '@/utils/isSmallScreen';
import { DownOutlined } from '@ant-design/icons';
import { Drawer, Modal } from 'antd';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ChatPageContent from './chatPageContent';
import MessageBox from './message_box';

interface ChatPageProps {
  isOpen: boolean;
  toggleOpen: () => void;
}

const ChatPage: React.FC<ChatPageProps> = ({ isOpen }) => {
  const dispatch = useDispatch();

  const toggleChatClose = () => {
    dispatch(setIsChatOpen(false));
  };

  const botIndex = useSelector((state: RootState) => state.globalState.botIndex);
  const isShowTutorial = useSelector((state: RootState) => state.messages.isShowTutorial);
  const message = useSelector((state: RootState) => state.messages.message);
  const messages = useSelector((state: RootState) => state.messages.messages);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleSendMessage = () => {
    if (message.trim()) {
      const userMessage = { text: message, isBot: false, code: 0 };
      dispatch(setIsShowTutorial(false));
      dispatch(setMessage(''));
      dispatch(setMessages([...messages, userMessage]));
      dispatch(setIsBotResponseNeeded(true));
      dispatch(setBotIndex(botIndex + 1));
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
  }, [isShowTutorial]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div>
      {!isSmallScreen ? (
        <Modal
          open={isOpen}
          onCancel={toggleChatClose}
          title="BearBuddy AI"
          centered
          width="70%"
          footer={[<MessageBox handleSendMessage={handleSendMessage} />]}
          className="hidden md:block"
          style={{ fontFamily: 'Noto Sans Thai, sans-serif' }}
        >
          <ChatPageContent />
        </Modal>
      ) : (
        <Drawer
          open={isOpen}
          placement="bottom"
          title="BearBuddy AI"
          closable={true}
          onClose={toggleChatClose}
          closeIcon={<DownOutlined />}
          height={'90%'}
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
