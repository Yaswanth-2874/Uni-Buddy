import mongoose from "mongoose";

const messageSchema = new mongoose.Schema(
  {
    // Reference to the Author of the current Post
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    // The actual content of the post
    message: {
      type: String,
      required: true,
    },

    // For storing the count of the likes
    likeCount: {
      type: Number,
      required: true,
      default: 0,
    },

    // For storing all the replies to the current Message
    replies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const Message = new mongoose.model("message", messageSchema);
export default Message;
