import React from 'react';

interface ButtonSecondaryProps {
  text: string;
  onClick: () => void;
}

const ButtonSecondary: React.FC<ButtonSecondaryProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-fit md:w-fit md:h-[32px] p-2 md:py-2 md:px-4
      bg-gray-200 hover:bg-gray-300 text-black rounded-lg duration-100"
    >
      {text}
    </button>
  );
};

export default ButtonSecondary;
