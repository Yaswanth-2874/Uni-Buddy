import mongoose from "mongoose";

const estabilshDbConnection = async () => {
  const URI = process.env.MONGO_DB_URI;
  try {
    await mongoose.connect(URI);
    console.log("Connected to Mongo DB Successfully");
  } catch (error) {
    console.log(`Failed to Connect to Mongo DB due to ${error}`);
  }
};

export default estabilshDbConnection;
