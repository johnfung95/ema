"use client"
import Image from "next/image"
import imgPath from "../public/ema.png";
import EmaDataModel from "../interface/EmaDataModel";

const SingleEma: React.FC<EmaDataModel> = ({ id, content }) => {
    return (
        <div className="mt-8 flex flex-col gap-6">
            <div className="relative w-full flex justify-center items-center ">
                <Image
                    src={imgPath}
                    quality={100}
                    alt="Descriptive alt text for Ema"
                    className="w-96 h-96 min-w-80 min-h-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end items-center ">
                    <div className="p-2 resize-none w-80 h-44 bg-transparent text-black italic text-xs sm:text-sm overflow-hidden break-words text-center mx-4 rounded overflow-y-scroll">
                        {content}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleEma