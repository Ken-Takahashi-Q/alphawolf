import { buddyHello } from "@/utils/global";
import { useEffect, useState } from "react";

const SpeechBox = () => {
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    let index = 0;
    const text = buddyHello;
    const intervalId = setInterval(() => {
      setDisplayText(text.slice(0, index + 1));
      index += 1;
      if (index >= text.length) {
        clearInterval(intervalId);
      }
    }, 40);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="fixed bottom-4 md:bottom-6 right-4 flex items-center w-40 p-2 rounded bg-yellow-100 text-black text-sm shadow-xl -translate-y-32 md:-translate-y-20">
      {displayText}
      <div className="fixed bottom-0 right-6 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent
      border-t-8 border-t-yellow-100 translate-y-2">
      </div>
    </div>
  )
}

export default SpeechBox