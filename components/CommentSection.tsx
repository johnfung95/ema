import {CommentsDataModel} from "@/interface/CommentsDataModel";
import CommentCard from "@/components/UI/CommentCard";

const CommentSection: React.FC<CommentsDataModel> = ({ comments }) => {

    return (
        <div className="overflow-y-auto mt-16">
            {comments.map((item, index) => (
                <CommentCard key={index} timestamp={item.timestamp} content={item.content} />
            ))}
        </div>
    );
}

export default CommentSection;