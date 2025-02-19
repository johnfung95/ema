"use client"
import Image from "next/image"
import imgPath from "../public/ema.png";

const EmaForm: React.FC = () => {

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }

    return (
        <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit} >
            <div className="relative w-full flex justify-center items-center ">
                <Image
                    src={imgPath}
                    quality={100}
                    alt="Descriptive alt text for Ema"
                    className="w-96 h-96 min-w-80 min-h-80"
                />
                <div className="absolute inset-0 flex flex-col justify-end mb-8 items-center ">
                    <textarea className="p-2 resize-none w-80 h-44 bg-transparent text-black italic text-xs sm:text-sm overflow-hidden break-words text-center mx-4 border-2 border-stone-900 rounded-sm overflow-y-scroll">
                    </textarea>
                </div>
            </div >
            <div className="w-full flex justify-center">
                <button className="bg-zinc-400 w-24 rounded-sm hover:cursor-pointer hover:bg-light-gray">
                    Submit
                </button>
            </div>
        </form>
    )
}

export default EmaForm