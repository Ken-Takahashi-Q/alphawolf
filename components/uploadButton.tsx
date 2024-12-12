import React, { useRef } from 'react';

const UploadButton: React.FC<{
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = ({ handleFileChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className="group duration-200">
      <input type="file" ref={fileInputRef} className="hidden" onChange={handleFileChange} />

      <button
        className={`flex h-8 w-8 items-center justify-center rounded-full bg-[#93d600] p-4 text-2xl text-white duration-200 hover:bg-[#83c600]`}
        onClick={handleButtonClick}
      >
        +
      </button>
    </div>
  );
};

export default UploadButton;
