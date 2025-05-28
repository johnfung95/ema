import { CssBaseline } from "@mui/material";
import { connect } from "http2";
import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

let client = null;

export async function connectToDatabase() {
  if (client) {
    return client;
  }
  try {
    client = await MongoClient.connect(MONGODB_URI);
    return client;
  } catch (error) {
    console.error("Error connecting MongoDB", error);
  }
}

export const getEmas = async (perPage: number, pageNum: number) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("ema");
    const items = await db
      .collection("wish")
      .find({})
      .skip(perPage * (pageNum - 1))
      .limit(perPage)
      .toArray();

    const itemCount = await db.collection("wish").countDocuments({});

    const response = { items, itemCount };
    return response;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later");
  }
};

export const getSingleEma = async (id: string | any) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("ema");
    const oid = new ObjectId(id);
    const item = await db.collection("wish").findOne(
      { _id: oid },
      {
        projection: {
          _id: 0,
        },
      }
    );

    return item;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later");
  }
};

export const getSingleComments = async (id: string | any) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("ema");
    const oid = new ObjectId(id);
    const item = await db.collection("comments").findOne(
      { _id: oid },
      {
        projection: {
          _id: 0,
        },
      }
    );

    return item;
  } catch (error) {
    throw new Error("Failed to fetch comments data. Please try again later");
  }
};

export const sendComment = async (
  id: string | any,
  content: string,
  timestamp: Date
) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("ema");
    const oid = new ObjectId(id);

    const commentObject = {
      timestamp: timestamp,
      content: content,
    };

    const result = await db
      .collection("comments")
      .updateOne({ wishId: oid }, { $push: { comments: commentObject } });

    if (result.modifiedCount === 0) {
      throw new Error("Failed to add comment. Please try again.");
    }

    return { message: "Comment added successfully" };
  } catch (error) {
    throw new Error("Failed to send comment. Please try again later");
  }
};

export const getUserByEmail = async (email: String) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("accounts");
    const item = await db.collection("users").findOne({ email: email });

    return item;
  } catch (error) {
    throw new Error("Failed to get session user with email.");
  }
};

export const createNewUser = async (
  email: string,
  username: string,
  image: string
) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("accounts");
    const result = await db.collection("users").insertOne({
      email: email,
      username: username,
      image: image,
    });
  } catch (error) {
    throw new Error("Failed to create new user in db.");
  }
};

export const insertNewContentToDb = async (
  content: string,
  author: string,
  createdAt: Date,
  likes: number,
  tags: Array<string>[]
) => {
  try {
    const client = await connectToDatabase();
    const db = client.db("ema");

    // Insert the new wish
    const wishResult = await db.collection("wish").insertOne({
      content: content,
      author: author,
      createdAt: createdAt,
      likes: likes,
      tags: tags,
    });

    const wishId = wishResult.insertedId;

    const commentResult = await db.collection("comments").insertOne({
      wishId: wishId,
      comments: [],
    });

    await db
      .collection("wish")
      .updateOne(
        { _id: wishId },
        { $set: { commentId: commentResult.insertedId.toString() } }
      );
  } catch (error) {
    throw new Error("Failed to insert new content to database.");
  }
};
