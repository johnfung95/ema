import Image from "next/image";
import imgPath from "../../../public/cover.jpg";
import Navbar from "./Navbar";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Background = ({ children }: Props) => {
  // TODO: dynamic number pages
  // TODO: randamize the sequence of the ema on each reload

  return (
    <div className="h-screen min-w-max z-50">
      <Navbar />
      <Image
        id="cover-img"
        src={imgPath}
        quality={100}
        alt="Shrine"
        className="-z-50 blur-sm bg-repeat-y"
        fill={true}
      />
      <div className="mt-8">

      {children}
      </div>
    </div>
  );
};

export default Background;
