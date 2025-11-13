"use client";
import { useState, useEffect } from "react";
import Ema from "@/components/Ema";
import CommentSection from "@/components/CommentSection";
import CommentField from "@/components/CommentField";
import ContentPageNumBar from "@/components/UI/ContentPageNumBar";
import moment from "moment";
import { useEma } from "@/contexts/EmaContext";

interface EmaDetail {
  id: string;
  ema: any | [];
  comments: any | [];
}

const EmaDetailView: React.FC<EmaDetail> = ({ id, ema, comments }) => {
  const emaContext = useEma();
  console.log(emaContext.isCommentClicked);
  const [pageComments, setPageComments] = useState([]);
  const [pageNum, setPageNum] = useState(1);
  const perPage = 5;
  const totalPages = Math.ceil(comments.length / perPage);
  const prevPage = pageNum - 1 > 0 ? pageNum - 1 : 1;
  const nextPage = Math.min(pageNum + 1, totalPages);
  const isPageOutOfRange = pageNum > totalPages;

  const pages: number[] | any = [];
  const offsetNumbers = 3;

  for (let i = pageNum - offsetNumbers; i <= pageNum + offsetNumbers; i++) {
    if (i >= 1 && i <= totalPages) {
      pages.push(i);
    }
  }

  const PageChangeHandler = (newPageNum: number) => {
    setPageNum(newPageNum);
  };

  useEffect(() => {
    const start = (pageNum - 1) * perPage;
    const end = start + perPage;

    const tempComments = comments.slice(start, end);
    setPageComments(tempComments);
  }, [pageNum, comments]);

  return (
    <div>
      <Ema
        id={ema.id}
        content={ema.content}
        imgStyle={"w-96 h-96 min-w-80 min-h-80"}
        bottomBarStyle={"w-96"}
        author={ema.author}
        createdAt={moment(ema.createdAt).format("YYYY-MM-DD")} // Format date
        likes={ema.likes}
      />
      {emaContext.isCommentClicked && (
        <div className="mt-8">
          <CommentField id={id} />
        </div>
      )}
      {pageComments.length > 0 && (
        <div className="mt-8">
          <div className="m-4">
            <CommentSection comments={pageComments} />
          </div>
          <ContentPageNumBar
            pageNum={pageNum}
            prevPage={prevPage}
            pages={pages}
            totalPages={totalPages}
            nextPage={nextPage}
            pageChangeHandler={PageChangeHandler}
          />
        </div>
      )}
    </div>
  );
};

export default EmaDetailView;
