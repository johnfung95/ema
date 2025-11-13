import { insertNewContentToDb } from "@/utils/database";

export const POST = async (req: Request) => {
  try {
    const { content, author, createdAt, likes, tags } = await req.json();
    await insertNewContentToDb(content, author, createdAt, likes, tags);
    return Response.json({ status: 200, message: "successful insert" });
  } catch (error) {
    return Response.json({ status: 500, error: error });
  }
};
