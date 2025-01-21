import mongoose from "mongoose";

let isConnected = false; // Track the connection state

export const connectToDB = async () => {
  // Enable strict query mode
  mongoose.set("strictQuery", true);

  // Return early if already connected
  if (isConnected) {
    console.log("MongoDB is already connected");
    return;
  }

  // Choose the appropriate URI based on the environment
  const mongoURI =
    process.env.NODE_ENV === "development"
      ? process.env.MONGODB_URI_DEV
      : process.env.MONGODB_URI;

  try {
    // Enable debug mode in development
    if (process.env.NODE_ENV === "development") {
      mongoose.set("debug", true);
    }

    // Connect to MongoDB
    await mongoose.connect(mongoURI, {
      dbName: "share_prompts",
    });

    isConnected = true;
    console.log(`MongoDB connected successfully to ${mongoURI}`);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw error; // Optional: Throw the error to handle it further up the chain
  }
};
