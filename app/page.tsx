"use client"
import FloatingButton from "@/components/floatingButton";
import Image from "next/image";
import { useState } from "react";
import homepageImage from "../public/homepage.png";
import Chatbot from "./chatbox/chat";

export default function Home() {
  const [isChatOpen, setIsChatOpen] = useState(true);

  const toggleChatOpen = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <main className="flex min-h-screen flex-col">
      <Image
        src={homepageImage} 
        alt="homepage"
        width={homepageImage.width}
        height={homepageImage.height}
        // layout="intrinsic"
        quality={100}
        // priority
      />
      <div className="fix">
        <div className="relative">
          <FloatingButton onClick={toggleChatOpen} />
          <Chatbot isOpen={isChatOpen} toggleOpen={toggleChatOpen} />
        </div>
      </div>
    </main>
  );
}
