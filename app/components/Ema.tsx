"use client";
import Image from "next/image";
import imgPath from "../../public/ema.png";

const Ema = ({content}) => {
  return (
    <div className="sticky place-self-center w-full sm:w-auto relative">
      <div className="absolute inset-0 flex flex-col justify-center items-center p-4">
        <p className="text-black italic text-xs sm:text-sm overflow-hidden break-words max-h-full">{content}</p>
      </div>
      <Image
        src={imgPath}
        quality={100}
        alt="Ema"
        className="w-full max-w-full"
      />
    </div>
  );
};

export default Ema;
