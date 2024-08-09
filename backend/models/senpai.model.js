import mongoose from "mongoose";

const senpaiSchema = mongoose.Schema({
  fullname: {
    type: "String",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
  password: {
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
    required: true,
    enum: ["male", "female"],
  },
});

const Senpai = mongoose.model("senpai", senpaiSchema);
export default Senpai;
