import { Spin } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';

interface BubbleProps {
  bubbleKey: number;
  isBot: boolean;
  children: ReactNode;
}

const Bubble: React.FC<BubbleProps> = ({ bubbleKey, isBot, children }) => {
  const [showContent, setShowContent] = useState(!isBot);

  useEffect(() => {
    if (isBot && bubbleKey > 1) {
      const timer = setTimeout(() => {
        setShowContent(true);
      }, 1000);
      return () => clearTimeout(timer);
    } else {
      setShowContent(true);
    }
  }, [isBot]);

  return (
    <div
      className={`w-fit max-w-[80%] overflow-hidden text-ellipsis rounded-xl px-4 py-2 md:max-w-80 ${
        isBot ? 'mr-auto bg-gray-100 text-black' : 'ml-auto bg-[#93d600] text-white'
      }`}
      key={bubbleKey}
    >
      {isBot && !showContent ? <Spin /> : children}
    </div>
  );
};

export default Bubble;
