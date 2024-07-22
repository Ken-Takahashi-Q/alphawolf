import Image from 'next/image';
import React from 'react';

interface PromptBoxProps {
  key: string;
  text: string;
  image: string;
}

const PromptBox: React.FC<PromptBoxProps> = ({ key, text, image }) => {
  return (
    <button
      className={`w-36 h-36 p-4 border border-black rounded-xl duration-300 hover:bg-gray-200`}
      key={key}
    >
      <Image src={image} alt={image}/>
      {text}
    </button>
  );
};

export default PromptBox;
