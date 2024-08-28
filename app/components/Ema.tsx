"use client";
import Image from "next/image";
import imgPath from "../../public/ema.png";

const Ema = ({content}) => {

  return (
    <div className="sticky place-self-center">
      <div className="absolute w-full h-full flex flex-col-reverse justify-around items-center">
        <p className="text-black italic text-sm px-4 break-all">{content}</p>
        {/* {content < 30  && <div className=""></div>}
        {content >= 30 && <div className=""></div>} */}
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
