import mongoose from "mongoose";

let isConnected = false; // this is to check if the database is connected or not

export const connectToDB = async () => {
  mongoose.set("strictQuery", false);
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share-prompts",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;
    console.log("MongoDB is connected");
  } catch (error) {
    console.log("Error connecting to database: ", error);
  }
};
