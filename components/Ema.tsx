"use client"
import Image from "next/image"
import imgPath from "../public/ema.png";
import Link from "next/link"
import { FaRegHeart } from "react-icons/fa";
import { GoComment } from "react-icons/go";

interface EmaPlaque {
    id: string,
    content: string,
    imgStyle?: string,
    bottomBarStyle?: string,
    link?: string | null
}

const truncateContent = (text: String) => {
    const words = text.split(' ');
    if (words.length > 10) {
        return words.slice(0, 10).join(' ') + '...';
    }
    return text;
};

const Ema: React.FC<EmaPlaque> = ({ id, content, imgStyle, bottomBarStyle, link }) => {
    const heartClickHandler = () => {
        console.log("heart clicked")
    }

    const commentClickHandler = () => {
        console.log("comment clicked")
    }

    return (
        <div className="" key={id}>
            <div className="relative w-full flex justify-center items-center ">
                <Image
                    src={imgPath}
                    quality={100}
                    alt="Ema"
                    className={imgStyle}
                />
                {link ?
                    <Link href={`/ema-content/${id}`} className="absolute inset-0 mt-12 flex flex-col justify-center items-center hover:cursor-pointer">
                        <p className="text-black italic text-xs sm:text-sm overflow-hidden break-words text-center mx-4">
                            {truncateContent(content)}
                        </p>
                    </Link>
                    :
                    <div className="absolute inset-0 flex flex-col justify-end items-center ">
                        <div className="p-2 resize-none w-80 h-44 bg-transparent text-black italic text-xs sm:text-sm overflow-hidden break-words text-center mx-4 rounded-sm overflow-y-scroll">
                            {content}
                        </div>
                    </div>
                }
            </div>
            <div className={`${bottomBarStyle} flex justify-between m-auto text-xs sm:text-sm`}>
                <div>
                    <div className="flex justify-center items-center m-2 gap-2">
                        <button>
                            <FaRegHeart className="text-xl hover:cursor-pointer" onClick={heartClickHandler} />
                        </button>
                        <p>1234</p>
                    </div>
                </div>
                <div className="m-2">
                    <button>
                        <GoComment className="text-xl hover:cursor-pointer" onClick={commentClickHandler} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Ema