"use client";
import { IoMdSend } from "react-icons/io";
import { useState } from "react";

interface CommentFieldProps {
  id: string;
}

const CommentField: React.FC<CommentFieldProps> = ({ id }) => {
  const [comment, setComment] = useState("");

  const handleCommentSubmitClick = async () => {
    if (!comment.trim()) return;

    const timestamp = new Date();
    try {
      // await sendComment(id, comment, timestamp);
      const res = await fetch("/api/create-comment", {
        method: "POST",
        body: JSON.stringify({
          id: id,
          content: comment,
          timestamp: timestamp,
        }),
      });

      if (res.ok) {
        console.log("Submitted new comment successfully");
      } else {
        console.log("Submit failed");
      }
      setComment("");
    } catch (error) {
      console.error("Failed to submit comment:", error);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <textarea
        value={comment} // Bind textarea value to state
        onChange={(e) => setComment(e.target.value)} // Update state on change
        placeholder="Your comments ..."
        rows={3}
        className="p-2 bg-white w-full rounded text-black mx-4 resize-none border-2 border-black"
      />
      <IoMdSend
        onClick={handleCommentSubmitClick}
        className="hover:cursor-pointer hover:text-white hover:bg-blue-300 text-4xl bg-blue-400 p-2 rounded-full"
      />
    </div>
  );
};

export default CommentField;
