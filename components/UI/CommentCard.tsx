import { Comment } from "@/interface/CommentsDataModel";
import moment from "moment";

const CommentCard: React.FC<Comment> = ({
  timestamp,
  content,
}) => {
  return (
    <div className="overflow-y-auto my-8">
      <div>
        <p className="text-sm italic text-gray-50">
          {moment(timestamp).format("YYYY-MM-DD, hh:mm")}
        </p>
        <p className="text-md font-bold">{content}</p>
      </div>
    </div>
  );
};

export default CommentCard;
