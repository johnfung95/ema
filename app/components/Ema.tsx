"use client";
import Image from "next/image";
import imgPath from "../../public/ema.png";
import EmaDataModel from "./models/EmaDataModel"
import Link from "next/link";

const truncateContent = (text: String) => {
  const words = text.split(' ');
  if (words.length > 10) {
    return words.slice(0, 10).join(' ') + '...';
  }
  return text;
};

const Ema: React.FC<EmaDataModel> = ({ id, content }) => {
  return (
    <div>
      <div className="relative w-full sm:w-auto">
        <Image
          src={imgPath}
          quality={100}
          alt="Descriptive alt text for Ema"
          className="w-32 h-32 max-w-full md:w-48 md:h-full lg:w-52 xl:w-72"
        />
        {/*TODO: add on click handler */}
        <Link href={`/ema-content/${id}`} className="absolute inset-0 mt-12 flex flex-col justify-center items-center p-4 hover:cursor-pointer">
          <p className="text-black italic text-xs sm:text-sm overflow-hidden break-words text-center">
            {/* TODO: reveal the rest of the text in another view, clickable button */}
            {truncateContent(content)}
          </p>
        </Link>
      </div>
      <div className="flex justify-between text-xs sm:text-sm">
        <div className="flex justify-center items-center">
          <button className="p-2 hover:pointer">Like</button>
          <p>Like count</p>
        </div>
        <button className="p-2 hover:pointer">Comments</button>
      </div>
    </div>
  );
};

export default Ema;
