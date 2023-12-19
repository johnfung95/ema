"use client";
import Image from "next/image";
import imgPath from "../../public/cover.jpg";
import { useEffect } from "react";
import {Petal, BlossomScene, BlossomSceneConfig} from "../components/UI/BlossomScene"
import Portal from "../components/UI/Portal";

const Landing: React.FC = () => {
  useEffect(() => {
    const petalsTypes = [
      new Petal({customClass: 'petal-style1'}),
      new Petal({customClass: 'petal-style2'}),
      new Petal({customClass: 'petal-style3'}),
      new Petal({customClass: 'petal-style4'})
    ];

    const myBlossomSceneConfig: BlossomSceneConfig = {
      id: 'blossom_container',
      petalsTypes
    };

    const myBlossomScene = new BlossomScene(myBlossomSceneConfig);
  }, []);

  return (
    <div className="cover">
      <Portal/>
      <div id="blossom_container"></div>
      <Image
        src={imgPath}
        quality={100}
        alt="Shrine"
        className="h-full w-screen -z-50"
        fill={true}
      />
    </div>
  );
};

export default Landing;
