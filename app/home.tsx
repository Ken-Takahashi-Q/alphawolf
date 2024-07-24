"use client"
import FloatingButton from "@/components/floatingButton";
import SpeechBox from "@/components/speech";
import { RootState } from "@/redux/store/reducers";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import ChatPage from "../components/chatbox/chatpage";
import homepageAppImage from "../public/homepage-app.png";
import homepageImage from "../public/homepage.png";
import { setIsChatOpen } from "../redux/reducers/globalReducer";

export default function Home() {
  const dispatch = useDispatch();
  const isChatOpen = useSelector((state: RootState) => state.globalState.isChatOpen);

  const toggleChatOpen = () => {
    dispatch(setIsChatOpen(!isChatOpen));
  };

  return (
    <main className={`flex min-h-screen flex-col bg-white`}>
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
        src={homepageAppImage} 
        alt="homepageAppImage"
        width={homepageAppImage.width}
        height={homepageAppImage.height}
        quality={100}
      />

      <SpeechBox/>
      <FloatingButton isOpen={isChatOpen} onClick={toggleChatOpen} />
      <ChatPage isOpen={isChatOpen} toggleOpen={toggleChatOpen} />
    </main>
  );
}
