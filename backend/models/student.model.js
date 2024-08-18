import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
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
    required: "true",
  },
});

const Student = new mongoose.model("user", studentSchema);
export default Student;
