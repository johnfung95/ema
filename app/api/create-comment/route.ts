import { sendComment } from "../../../utils/database"

export const POST = async (req: Request) => {
    try {
        const { id, content, timestamp } = await req.json()
        await sendComment(id, content, timestamp)
        return Response.json({ status: 200, message: "successful insert new comment" })
    } catch (error) {
        return Response.json({ status: 500, error: error })
    }
}
