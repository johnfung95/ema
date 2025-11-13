"use client";

import Image from "next/image";
import imgPath from "/public/cover.jpg";
import { useEffect, useState } from "react";
import {
  Petal,
  BlossomScene,
  BlossomSceneConfig,
} from "@/components/UI/BlossomScene";
import Link from "next/link";
import Navbar from "@/components/UI/Navbar";
import Spinner from "@/components/UI/Loading";
import { useLoading } from "@/contexts/LoadingContext";

const Landing: React.FC = () => {
  const loadingContext = useLoading();

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

  const handleClick = () => {
    loadingContext.setIsLoading(true);
  };

  return (
    <div className="cover">
      <Navbar />
      <div className="absolute flex flex-col justify-center items-center w-screen h-screen z-50 top-0 left-0">
        <div
          id="blossom_container"
          className="z-50 w-full h-full absolute"
        ></div>
        <div
          id="portal"
          className="w-5/6 md:w-2/6 h-3/6 md:h-4/6 max-h-80 bg-white text-black rounded-2xl opacity-40 z-50 hover:opacity-60 hover:cursor-pointer"
        >
          <Link
            href="/emas"
            onClick={handleClick}
            className="flex justify-center items-center h-full text-lg md:text-xl"
          >
            Enter
          </Link>
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
        {loadingContext.isLoading && <Spinner />}
      </div>
    </div>
  );
};

export default Landing;
