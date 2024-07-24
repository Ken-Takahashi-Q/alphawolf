import { Spin } from 'antd';
import React from 'react';

interface BubbleProps {
  key: string;
  text: string;
  isBot: boolean;
}

const Bubble: React.FC<BubbleProps> = ({ key, text, isBot }) => {
  return (
    <div
      className={`w-fit md:max-w-80 px-4 py-2 rounded-xl text-ellipsis overflow-hidden ${
        isBot ? 'bg-gray-100 text-black mr-auto' : 'bg-[#93d600] text-white ml-auto'
      }`}
      key={key}
    >
      {text === '' ? (
        <Spin/>
      ) : (
        text
      )}
    </div>
  );
};

export default Bubble;
