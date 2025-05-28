import React from "react";
import Link from "next/link";
import PageNumberBar from "../../interface/PageNumberBar";

const PageNumBar: React.FC<PageNumberBar> = ({
  pageNum,
  prevPage,
  pages,
  totalPages,
  nextPage,
  pageChangeHandler,
}) => {
  return (
    <div className="flex justify-center items-center sm:mb-8 text-black">
      <div className="flex flex-wrap justify-center border-[1px] gap-2 sm:gap-4 rounded-[10px] border-light-green p-2 sm:p-4 bg-light-gray">
        {pageNum === 1 ? (
          <div className="opacity-60 px-1 sm:px-2" aria-disabled="true">
            Prev
          </div>
        ) : (
          <div
            aria-label="Prev page"
            onClick={() => pageChangeHandler(pageNum - 1)}
            className="hover:cursor-pointer hover:text-white hover:bg-green-500 px-1 sm:px-2 rounded-md"
          >
            Prev
          </div>
        )}
        {pages &&
          pages.map((page) => (
            <div
              onClick={() => pageChangeHandler(page)}
              className={
                pageNum === page
                  ? "bg-green-500 fw-bold px-2 rounded-md text-white"
                  : "hover:bg-green-500 px-1 sm:px-2 rounded-md hover:cursor-pointer"
              }
              key={page} 
            >
              {page}
            </div>
          ))}
        {pageNum === totalPages ? (
          <div className="opacity-60 px-1 sm:px-2" aria-disabled="true">
            Next
          </div>
        ) : (
          <div
            aria-label="Next page"
            onClick={() => pageChangeHandler(pageNum + 1)}
            className="hover:cursor-pointer hover:text-white hover:bg-green-500 px-1 sm:px-2 rounded-md"
          >
            Next
          </div>
        )}
      </div>
    </div>
  );
};

export default PageNumBar;