import React from "react"

const Portal: React.FC = () => {
  return (
    <div className="absolute flex justify-center items-center w-screen h-screen z-50 overflow-hidden">
        <div className="mt-32 w-2/6 h-4/6 bg-white text-black rounded-t-2xl opacity-40 hover:opacity-60 hover:cursor-pointer">
            <p className="flex justify-center items-center h-full">Enter</p>
        </div>
    </div>
  );
};

export default Portal;
