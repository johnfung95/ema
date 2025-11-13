"use client";
import { useState } from "react";
import Image from "next/image";
import imgPath from "/public/ema.png";
import { useSession } from "next-auth/react";

const EmaForm: React.FC = () => {
  const [content, setContent] = useState("");
  const [name, setName] = useState("");
  const { data: session } = useSession();

  const contentChangeHandler = (e) => {
    setContent(e.target.value);
  };

  const authornameChangeHandler = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit clicked");

    const createdAt = new Date();
    const likes = 0;
    let author: string;

    if (name.trim() === "") {
      author = session?.user ? session.user.name : "Anonymous";
    } else {
      author = name;
    }

    const tags = [];

    const res = await fetch("/api/create-ema", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        content: content,
        author: author,
        createdAt: createdAt,
        likes: likes,
        tags: tags,
      }),
    });

    if (res.ok) {
      console.log("Submitted successfully");
      window.location.href = "/emas";
    } else {
      console.log("Submit failed");
    }
  };

  return (
    <form className="mt-8 flex flex-col gap-6" onSubmit={handleSubmit}>
      <div className="relative w-full flex justify-center items-center">
        <Image
          src={imgPath}
          quality={100}
          alt="Ema"
          className="w-lg h-lg min-w-80 min-h-80"
        />
        <div className="absolute inset-0 flex flex-col justify-end mb-4 items-center">
          <textarea
            className="p-2 resize-none w-sm md:w-md h-1/2 bg-transparent text-black italic text-md overflow-hidden break-words text-center border-2 border-stone-900 rounded-sm overflow-y-scroll"
            placeholder="Your wish here ..."
            value={content}
            onChange={contentChangeHandler}
          />
          <input
            type="text"
            className="w-sm md:w-md text-black italic text-sm border-2 border-stone-900 mt-2 rounded-sm p-0.5"
            value={name}
            onChange={authornameChangeHandler}
            placeholder="Optional: Your name here ..."
          />
        </div>
      </div>
      <div className="w-full flex justify-center">
        <button className="bg-zinc-400 w-24 rounded-sm hover:cursor-pointer hover:bg-zinc-600">
          Submit
        </button>
      </div>
    </form>
  );
};

export default EmaForm;
