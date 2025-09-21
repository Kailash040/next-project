/* eslint-disable @typescript-eslint/no-unused-expressions */
import mongoose from "mongoose";

type ConnectionObject = {
  isConnected?: number;
};
const connection = (ConnectionObject = {});

async function dbConnect(): Promise<void> {
  if (connection.isConnected) {
    console.log("db is already connected");
    return;
  }
  try {
    const db = await mongoose.connect(process.env.MONGODB_URL || "", {});
    connection.isConnected = db.connections[0].readyState;
    console.log("db is connected");
  } catch (error) {
    console.log("database connection failed", error);
    process.exit(1);
  }
}
export default dbConnect;
