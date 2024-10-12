import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: {
    type: "String",
    required: true,
  },
  password: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  universityName: {
    type: "String",
    required: true,
  },
  avatar: {
    type: "String",
  },
  gender: {
    type: "String",
    enum: ["male", "female"],
    required: true,
  },
  role: {
    type: "String",
    enum: ["Mentor", "Student"],
    required: true,
  },
});

const User = new mongoose.model("user", userSchema);
export default User;
