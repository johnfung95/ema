import Image from "next/image";
import imgPath from "/public/cover.jpg";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full h-full overflow-x-hidden overflow-y-auto relative">
      <Navbar />
      <Image
        id="cover-img"
        src={imgPath}
        quality={100}
        alt="Shrine"
        className="object-cover object-center blur-xs "
        fill={true}
        priority
      />
      <div className="relative inset-0 bg-black bg-opacity-30" />
      <div className="relative h-full z-10 pt-20 px-4 sm:px-6 lg:px-8 md:h-vh-100">
        {children}
      </div>
    </div>
  );
};

export default Background;
