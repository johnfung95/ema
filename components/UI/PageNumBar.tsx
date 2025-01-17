import React from "react"
import Link from "next/link";

interface pageNumberBar {
  pageNum: number
  prevPage: number
  pages: []
  totalPages: number
  nextPage: number
}


const PageNumBar:React.FC<pageNumberBar> = ({pageNum, prevPage, pages, totalPages, nextPage}) => {

    return (<div className="flex justify-center items-center mt-8 sm:mb-8 text-black">
        <div className="flex flex-wrap justify-center border-[1px] gap-2 sm:gap-4 rounded-[10px] border-light-green p-2 sm:p-4 bg-light-gray">
            {pageNum === 1 ? (
                <div className="opacity-60 px-1 sm:px-2" aria-disabled="true">
                    Prev
                </div>
            ) : (
                <Link
                    href={`?page=${prevPage}`}
                    aria-label="Prev page"
                    className="hover:text-white hover:bg-green-500 px-1 sm:px-2 rounded-md"
                >
                    Prev
                </Link>
            )}
            {pages && pages.map((page, index) => (
                <Link
                    className={
                        pageNum === page
                            ? "bg-green-500 fw-bold px-2 rounded-md text-white"
                            : "hover:bg-green-500 px-1 sm:px-2 rounded-md"
                    }
                    key={index}
                    href={`?page=${page}`}
                >
                    {page}
                </Link>
            ))}
            {pageNum === totalPages ? (
                <div className="opacity-60 px-1 sm:px-2" aria-disabled="true">
                    Next
                </div>
            ) : (
                <Link
                    href={`?page=${nextPage}`}
                    aria-label="Next page"
                    className="hover:text-white hover:bg-green-500 px-1 sm:px-2 rounded-md"
                >
                    Next
                </Link>
            )}
        </div>
    </div>)
}

export default PageNumBar