"use client"
import FloatingButton from "@/components/floatingButton";
import Image from "next/image";
import { useState } from "react";
import ChatPage from "../components/chatbox/chatpage";
import homepageAppImage from "../public/homepage-app.png";
import homepageImage from "../public/homepage.png";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleChatOpen = () => {
    setIsChatOpen(!isChatOpen);
  };

  const [isOn, setIsOn] = useState(false)

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <Image
        className="hidden md:block"
        src={homepageImage} 
        alt="homepage"
        width={homepageImage.width}
        height={homepageImage.height}
        quality={100}
      />

      {/* Mobile  Homepage */}
      <Image
        className="block md:hidden"
        src={homepageAppImage} 
        alt="homepageAppImage"
        width={homepageAppImage.width}
        height={homepageAppImage.height}
        quality={100}
      />

      <div className={`fix duration-300`}>
        <div className={`relative duration-300`}>
          <FloatingButton isOpen={isChatOpen} onClick={toggleChatOpen} />
          <ChatPage isOpen={isChatOpen} toggleOpen={toggleChatOpen} />
        </div>
      </div>
    </main>
  );
}
