import { SendOutlined } from '@ant-design/icons';
import React from 'react';

interface ButtonSendProps {
  text: string;
  onClick: () => void;
}

const ButtonSend: React.FC<ButtonSendProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center w-10 h-10 md:w-fit md:h-[32px] p-2 md:py-2 md:px-4
      bg-[#93d600] hover:bg-[#83c600] text-white font-bold rounded-lg duration-100"
    >
      <span className="hidden md:inline">{text}</span>
      <span className="inline md:hidden"><SendOutlined/></span>
    </button>
  );
};

export default ButtonSend;
