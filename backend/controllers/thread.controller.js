import Message from "../models/message.model.js";
import Thread from "../models/thread.model.js";

export const createThread = async (req, res) => {
  try {
    const { title, message, tags } = req.body;

    // Current User is the author
    const authorId = req.user._id;

    const baseMessage = await Message.create({
      authorId,
      message,
    });
    // All replies are nested to the base message itself
    const baseMessageId = baseMessage._id;

    const newThread = await Thread.create({
      authorId,
      title,
      messages: baseMessageId,
      tags,
    });

    await Promise.all([baseMessage.save(), newThread.save()]);
    res.status(201).json(newThread);
  } catch (error) {
    console.log("Error in create Thread Controller due to ", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getThread = async (req, res) => {
  try {
    const { _id } = req.params;
    const requiredThread = await Thread.findOne({ _id });
    if (!requiredThread)
      return res.status(404).json({ error: "Thread not found" });

    requiredThread.views = (requiredThread.views|| 0) + 1;
    await requiredThread.save();

    return res.status(200).json(requiredThread);
  } catch (error) {
    console.log("Error in getThread Controller due to", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
