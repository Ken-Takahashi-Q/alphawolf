import React from 'react';

interface ButtonPrimaryProps {
  text: string;
  onClick: () => void;
}

const ButtonPrimary: React.FC<ButtonPrimaryProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="ml-2 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg duration-100"
    >
      {text}
    </button>
  );
};

export default ButtonPrimary;
