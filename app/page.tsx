"use client"
import FloatingButton from "@/components/floatingButton";
import Image from "next/image";
import { useState } from "react";
import ChatPage from "../components/chatbox/chatpage";
import homepageImage from "../public/homepage.png";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatOpen = () => {
    setIsChatOpen(!isChatOpen);
  };

  const [isOn, setIsOn] = useState(false)

  return (
    <main className="flex min-h-screen flex-col">
      <Image
        src={homepageImage} 
        alt="homepage"
        width={homepageImage.width}
        height={homepageImage.height}
        quality={100}
      />
      <div className={`fix duration-300`}>
        <div className={`relative duration-300`}>
          <FloatingButton isOpen={isChatOpen} onClick={toggleChatOpen} />
          <ChatPage isOpen={isChatOpen} toggleOpen={toggleChatOpen} />
        </div>
      </div>
      {/* <div className="flex w-screen h-screen justify-center items-center">
        <button className={`flex items-center w-[16rem] h-[8rem] rounded-full
          ${isOn ? "bg-green-500" : "bg-gray-600"}
          duration-300`}
          onClick={() => setIsOn(!isOn)}
        >
          <div
            className={`w-[7rem] h-[7rem] bg-white rounded-full translate-x-[0.5rem]
              ${isOn ? "translate-x-[8.5rem]" : ""}
            duration-300`}
          >
          </div>
        </button>
      </div> */}
    </main>
  );
}
