import { getSingleEma, getSingleComments } from "../../../utils/database";
import EmaDetailView from "@/components/EmaDetailView";

interface EmaContentProps {
    params: {
        id: string;
    };
}

const EmaContentPage: React.FC<EmaContentProps> = async ({ params }) => {
    const { id } = await params;
    const singleEma = await getSingleEma(id);
    const commentsId = singleEma.commentsId;
    const commentsObj = await getSingleComments(commentsId);
    let sortedComments = []
    if (commentsObj && commentsObj.comments.length > 0) {
        sortedComments = commentsObj.comments.sort((a: any, b: any) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
    }
    

    return (
        <EmaDetailView 
            id={id}
            ema={singleEma}
            comments={sortedComments}
        />
    );
};

export default EmaContentPage;