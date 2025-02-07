"use client";
import Image from "next/image";
import imgPath from "../public/ema.png";
import EmaDataModel from "../interface/EmaDataModel"
import Link from "next/link";
import { FaRegHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";

const truncateContent = (text: String) => {
  const words = text.split(' ');
  if (words.length > 10) {
    return words.slice(0, 10).join(' ') + '...';
  }
  return text;
};

const EmaList: React.FC<EmaDataModel> = ({ id, content }) => {
  const heartClickHandler = () => {
    console.log("heart clicked")
  }

  const commentClickHandler = () => {
    console.log("comment clicked")
  }

  return (
    <div>
      <div className="relative w-full">
        <Image
          src={imgPath}
          quality={100}
          alt="Descriptive alt text for Ema"
          className="w-full h-44"
        />
        <Link href={`/ema-content/${id}`} className="absolute inset-0 mt-12 flex flex-col justify-center items-center hover:cursor-pointer">
          <p className="text-black italic text-xs sm:text-sm overflow-hidden break-words text-center mx-4">
            {truncateContent(content)}
          </p>
        </Link>
      </div>
      <div className="flex justify-between text-xs sm:text-sm">
        <div>
          <div className="flex justify-center items-center m-2 gap-2">
            <button>
              <FaRegHeart className="text-xl hover:pointer" onClick={heartClickHandler} />
            </button>
            <p>1234</p>
          </div>
        </div>
        <div className="m-2">
          <button>
            <GoComment className="text-xl hover:pointer" onClick={commentClickHandler} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmaList;
