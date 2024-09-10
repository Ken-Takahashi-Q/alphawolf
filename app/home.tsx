'use client';
import FloatingButton from '@/components/floatingButton';
import SpeechBox from '@/components/speech';
import { RootState } from '@/redux/store/reducers';
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import ChatPage from '../components/chatbox/chatpage';
import homepageAppMenuImage from '../public/homepage-app-menu.jpg';
import homepageAppImage from '../public/homepage-app.jpg';
import homepageImage from '../public/homepage.png';
import { setIsChatOpen } from '@/redux/reducers/globalReducer';
import RedBox from '@/components/red_box';

export default function Home() {
  const dispatch = useDispatch();
  const isChatOpen = useSelector((state: RootState) => state.globalState.isChatOpen);

  const toggleChatOpen = () => {
    dispatch(setIsChatOpen(!isChatOpen));
  };

  return (
    <main className={`flex min-h-screen flex-col overflow-hidden bg-white`}>
      {/* <iframe className="hidden min-h-screen w-full md:block" src="https://www.bigc.co.th/" /> */}
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
        className="-translate-y-[48px] md:hidden"
      />
      <Image
        src={homepageAppMenuImage}
        alt="homepageAppMenuImage"
        width={homepageAppMenuImage.width}
        height={homepageAppMenuImage.height}
        quality={100}
        className="fixed bottom-0 md:hidden"
      />

      <SpeechBox />
      <FloatingButton isOpen={isChatOpen} onClick={toggleChatOpen} />
      <ChatPage isOpen={isChatOpen} toggleOpen={toggleChatOpen} />

      <RedBox />
    </main>
  );
}
