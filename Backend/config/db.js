import mongoose from "mongoose";

const connectDB = async () => {
  const res = await mongoose.connect(
    "mongodb+srv://awstestproject55:wS3qJfknbGIK1pp0@lmsserver.k7yb1.mongodb.net/"
  );
  if (res) {
    console.log("connected Successfully");
  }
};

export default connectDB;
