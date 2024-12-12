'use client';
import { setMessage } from '@/redux/reducers/messagesReducer';
import { RootState } from '@/redux/store/reducers';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ButtonSend from '../button/buttonSend';
import ClearButton from '../clearButton';
import UploadButton from '../uploadButton';

interface MessageBoxProps {
  handleSendMessage: () => void;
}

const autoResize = (element: HTMLElement) => {
  element.style.height = 'auto';
  element.style.height = `${element.scrollHeight}px`;
};

const MessageBox: React.FC<MessageBoxProps> = ({ handleSendMessage }) => {
  const dispatch = useDispatch();
  const message = useSelector((state: RootState) => state.messages.message);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const [fileName, setFileName] = useState<string | null>(null);
  const [filePreview, setFilePreview] = useState<string | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
      if (textareaRef.current) {
        autoResize(textareaRef.current);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(setMessage(e.target.value));
    if (textareaRef.current) {
      autoResize(textareaRef.current);
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // setFileName(file.name);

      dispatch(setMessage(file.name));
      const reader = new FileReader();
      reader.onload = () => {
        if (file.type.startsWith('image/')) {
          setFilePreview(reader.result as string);
        } else {
          setFilePreview(null);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    if (textareaRef.current) {
      autoResize(textareaRef.current);
    }
  }, [message]);

  return (
    <div className="mr-2 flex w-full items-center justify-center gap-2 pb-6 md:pb-0">
      <div className="flex w-full items-center gap-2 rounded-xl bg-gray-100 px-2 py-1 md:w-[50%]">
        <UploadButton handleFileChange={handleFileChange} />

        {fileName ? (
          <div className="w-full rounded bg-gray-100 p-2 text-left text-gray-500">
            <span className="font-medium">{fileName}</span>
            {filePreview && (
              <img src={filePreview} alt="File Preview" className="mt-1 w-40 max-w-xs rounded" />
            )}
          </div>
        ) : (
          <textarea
            className="w-full resize-none overflow-hidden border border-transparent bg-transparent p-2 outline-none focus:border-transparent focus:ring-0"
            value={message}
            onChange={handleChange}
            placeholder="พิมพ์ข้อความ..."
            onKeyDown={handleKeyDown}
            rows={1}
            ref={textareaRef}
          />
        )}
        <ButtonSend text="Send" onClick={handleSendMessage} />
      </div>
      <ClearButton />
    </div>
  );
};

export default MessageBox;
