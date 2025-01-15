import Image from "next/image";
import imgPath from "../../../public/cover.jpg";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  return (
    <div className="min-h-screen w-full overflow-x-hidden relative">
      <Navbar />
      <Image
        id="cover-img"
        src={imgPath}
        quality={100}
        alt="Shrine"
        className="object-cover object-center blur-sm"
        fill={true}
        priority
      />
      <div className="absolute inset-0 bg-black bg-opacity-30" />
      <div className="relative h-vh-100 z-10 pt-20 px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};

export default Background;
