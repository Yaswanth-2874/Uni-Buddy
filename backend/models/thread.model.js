import mongoose from "mongoose";

const threadSchema = new mongoose.Schema(
  {
    // Title of The Thread
    title: { type: String, required: true },

    // Reference to the Author of the Thread
    authorId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    // Reference to the actual 1 main message(Replies are nested)
    messages: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
      required: true,
    },

    // PENDING ENUM.. WILL BE ADDED LATER
    tags: [{ type: String }],

    // For Counting the number of Views
    views: { type: Number, required: true, default: 0 },
  },
  { timestamps: true }
);

const Thread = new mongoose.model("thread", threadSchema);
export default Thread;
