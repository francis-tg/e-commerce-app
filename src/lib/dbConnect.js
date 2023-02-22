import mongoose from "mongoose";

const connection = {};

async function dbConnect() {
  mongoose.set("strictQuery", false);
  if (!process.env.MONGO_URL) {
    console.error("Db url not exists...");
    return (connection.isConnected = false);
  }
  await mongoose.connect(process.env.MONGO_URL, {}).then((db) => {
    console.log("Hey!! i'm ready");
    return (connection.isConnected = db.connections[0].readyState);
  });
}
export default dbConnect;
