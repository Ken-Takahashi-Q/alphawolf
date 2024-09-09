import Image from 'next/image';
import React from 'react';

interface PromptBoxProps {
  promptKey: number;
  text: string;
  image?: string | '';
  onClick: () => void;
}

const PromptBox: React.FC<PromptBoxProps> = ({ promptKey, text, image, onClick }) => {
  return (
    <button
      className="aspect-square max-w-40 rounded-xl border border-black p-4 text-left duration-300 hover:bg-gray-200"
      key={`prompt-box-${promptKey}`}
      onClick={onClick}
    >
      {image && <Image src={image} alt={image} />}
      {text}
    </button>
  );
};

export default PromptBox;
