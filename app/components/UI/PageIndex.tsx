import React from "react";

interface PageIndexType {
  pageNum: number;
}

const PageIndex: React.FC<PageIndexType> = ({ pageNum }) => {
  const arr = [];

  for (let i = 1; i <= pageNum; i++) {
    arr.push(String(i));
  }

  return (
    <div className="flex">
      {arr.map((item) => (
        <div className="mx-4 text-black italic" key={item}>
          {item}
        </div>
      ))}
    </div>
  );
};

export default PageIndex;
