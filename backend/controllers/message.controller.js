import Message from "../models/message.model.js";
import mongoose from "mongoose";

export const writeReply = async (req, res) => {
  try {
    const { parentMessageId, replyMessage } = req.body;

    // Current User is the author
    const authorId = req.user._id;

    const baseMessage = await Message.findOne({
      _id: parentMessageId,
    });

    if (!baseMessage)
      return res
        .status(404)
        .json({ error: "Not able to find the base message" });

    // reply message
    const newReply = await Message.create({
      authorId: authorId,
      message: replyMessage,
    });

    if (!baseMessage.replies) baseMessage.replies = [];

    baseMessage.replies.push(newReply._id);
    await Promise.all([baseMessage.save(), newReply.save()]);
    res.status(200).json({ baseMessage });
  } catch (error) {
    console.log("Error in writeReply Controller due to ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const toggleLike = async (req, res) => {
  const { messageId } = req.params;
  const userId = req.user._id;

  if (!mongoose.Types.ObjectId.isValid(messageId)) {
    return res.status(400).json({ error: "Invalid message ID" });
  }

  try {
    const message = await Message.findById(messageId);

    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    const userIndex = message.likes.indexOf(userId);
    let liked;

    if (userIndex !== -1) {
      // User has already liked the message, so undo like
      message.likes.splice(userIndex, 1); // Remove userId from likes
      message.likeCount -= 1; // Decrement likeCount
      liked = false;
    } else {
      // User has not liked the message yet, so like it
      message.likes.push(userId); // Add userId to likes
      message.likeCount += 1; // Increment likeCount
      liked = true;
    }

    await message.save();
    return res.status(200).json({
      //My Teammates ! Change the message into something more relevant if you see this and delete this comment
      message: liked ? "Liked Successfully" : "Removed like Successfully",
      likeCount: message.likeCount,
      likes: message.likes,
    });
  } catch (error) {
    console.error("Error in toggleLike Controller due to ", error);
    return res.status(500).json({ error: "Internal Server error" });
  }
};

export const getMessage = async (req, res) => {
  const { messageId } = req.params;

  try {
    const message = await Message.findOne({ _id: messageId })
      .populate({
        path: "authorId",
        model: "user",
        select: "fullname",
      })
      .populate({
        path: "replies",
        model: "message",
      });
    if (!message) {
      return res.status(404).json({ error: "Message not found" });
    }

    return res.status(200).json({ message });
  } catch (error) {
    console.error("Error in getMessage Controller due to ", error);
    return res.status(500).json({ error: "Internal Server error" });
  }
};
