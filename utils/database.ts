import { MongoClient } from "mongodb"
import { ObjectId } from "mongodb";

const MONGODB_URI = process.env.MONGODB_URI;

let client = null;

export async function connectToDatabase() {
  if (client) {
    return client;
  }

  if (!MONGODB_URI) {
    console.log("MongoDB URI not found.");
  }

  try {
    client = await MongoClient.connect(MONGODB_URI);
    // console.log("MongoDB connected");
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
    const oid = new ObjectId(id)
    const item = await db.collection("wish").findOne({ _id: oid })

    return item;
  } catch (error) {
    throw new Error("Failed to fetch data. Please try again later");
  }
};

export const getUserByEmail = async (email: String) => {
  try {
    const client = await connectToDatabase()
    const db = client.db("accounts")
    const item = await db.collection("users").findOne({ email: email })

    return item
  } catch (error) {
    throw new Error("Failed to get session user with email.")
  }
}

export const createNewUser = async (email: string, username: string, image: string) => {
  try {
    const client = await connectToDatabase()
    const db = client.db("accounts")
    const result = await db.collection("users").insertOne({
      email: email,
      username: username,
      image: image
    })

    

  } catch (error) {
    throw new Error("Failed to create new user in db.")
  }
}