"use client";
import Image from "next/image";
import imgPath from "../../public/ema.png";
import { useState } from "react";

const words = "psadfassadfasfdsfsdfsafsadfaefwefawef   dsfaefae fdfa d ffefaesdsdfdsfsfsdfsd";

const Ema: React.FC = () => {
  const [wordCount, setWordCount] = useState(words.length);

  return (
    <div className="sticky place-self-center">
      <div className="absolute w-full h-full flex flex-col-reverse justify-around items-center">
        <p className="text-black italic text-sm px-4 break-all">{words}</p>
        {wordCount < 30  && <div className=""></div>}
        {wordCount >= 30 && <div className=""></div>}
      </div>
      <Image
        src={imgPath}
        quality={100}
        alt="Ema"
        className="w-48 min-w-full"
      />
    </div>
  );
};

export default Ema;
