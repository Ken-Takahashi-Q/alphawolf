import Image from 'next/image';
import React from 'react';

interface PromptBoxProps {
  key: number;
  text: string;
  image?: string | "";
  onClick: () => void;
}

const PromptBox: React.FC<PromptBoxProps> = ({ key, text, image, onClick }) => {
  return (
    <button
      className="aspect-square max-w-40 p-4 text-left border border-black rounded-xl duration-300 hover:bg-gray-200"
      key={`prompt-box-${key}`}
      onClick={onClick}
    >
      {image && (<Image src={image} alt={image}/>)}
      {text}
    </button>
  );
};

export default PromptBox;
