import React from 'react';

interface ButtonWarningProps {
  text: string;
  onClick: () => void;
}

const ButtonWarning: React.FC<ButtonWarningProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center md:w-fit md:h-[32px] px-4 py-2
      bg-red-500 hover:bg-red-600 text-white rounded-lg duration-200"
    >
      {text}
    </button>
  );
};

export default ButtonWarning;
