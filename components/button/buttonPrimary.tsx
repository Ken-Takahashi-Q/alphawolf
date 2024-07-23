import { SendOutlined } from '@ant-design/icons';
import React from 'react';

interface ButtonPrimaryProps {
  text: string;
  onClick: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="w-10 h-10 md:w-fit md:h-fit ml-2 p-2 md:py-2 md:px-4 bg-green-500 hover:bg-green-700 text-white font-bold rounded-lg duration-100"
    >
      <span className="hidden md:inline">{text}</span>
      <span className="inline md:hidden"><SendOutlined/></span>
      
    </button>
  );
};

export default ButtonPrimary;
