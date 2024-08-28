"use client";

import Image from "next/image";
import imgPath from "../../../public/cover.jpg";
import { useEffect } from "react";
import { Petal, BlossomScene, BlossomSceneConfig } from "./BlossomScene";
import Link from "next/link";
import Navbar from "./Navbar"

const Landing: React.FC = () => {
  useEffect(() => {
    const petalsTypes = [
      new Petal({ customClass: "petal-style1" }),
      new Petal({ customClass: "petal-style2" }),
      new Petal({ customClass: "petal-style3" }),
      new Petal({ customClass: "petal-style4" }),
    ];

    const myBlossomSceneConfig: BlossomSceneConfig = {
      id: "blossom_container",
      petalsTypes,
    };

    const myBlossomScene = new BlossomScene(myBlossomSceneConfig);
  }, []);

  return (
    <div className="cover">
      <Navbar />
      <div className="absolute flex flex-col justify-center items-center w-screen h-screen z-50 overflow-hidden">
        <div id="blossom_container" className="z-50 w-full h-full absolute"></div>
        <div
          id="portal"
          className="mt-16 md:mt-32 w-5/6 md:w-2/6 h-3/6 md:h-4/6 bg-white text-black rounded-t-2xl opacity-40 z-50 hover:opacity-60 hover:cursor-pointer"
        >
          <Link href="/ema" className="flex justify-center items-center h-full text-lg md:text-xl">Enter</Link>
        </div>
        <Image
          id="cover-img"
          src={imgPath}
          quality={100}
          alt="Shrine"
          className="h-full w-screen object-cover -z-50"
          fill={true}
          priority
        />
      </div>
    </div>
  );
};

export default Landing;
