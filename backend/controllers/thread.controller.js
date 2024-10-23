import Message from "../models/message.model.js";
import Thread from "../models/thread.model.js";
import User from "../models/user.model.js";

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

    const requiredThread = await Thread.findOne({ _id })
      .populate({
        path: "authorId",
        model: "user",
        select: "fullname",
      })
      .populate({
        path: "messages",
        model: "message",
        populate: [
          {
            path: "authorId",
            model: "user",
            select: "fullname",
          },
          {
            path: "replies",
            model: "message",
            populate: {
              path: "authorId",
              model: "user",
              select: "fullname",
            },
          },
        ],
      });

    if (!requiredThread) {
      return res.status(404).json({ error: "Thread not found" });
    }

    // Increment the view count and save the updated thread
    requiredThread.views = (requiredThread.views || 0) + 1;
    await requiredThread.save();

    return res.status(200).json(requiredThread);
  } catch (error) {
    console.log("Error in getThread Controller due to", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getAllThreads = async (req, res) => {
  try {
    // Not fetching all the threads at once for performance reasons

    let page = parseInt(req.query.page) || 1; // Current page, default is 1
    let limit = parseInt(req.query.limit) || 10; // Threads per page, default is 10

    if (page <= 0) page = 1;
    if (limit <= 0) limit = 10;

    const threads = await Thread.find({})
      .skip((page - 1) * limit)
      .limit(limit);

    const totalThreads = await Thread.countDocuments(); // Total number of threads

    // Returns empty array if non existing page is requested
    return res.status(200).json({
      threads,
      currentPage: page,
      totalPages: Math.ceil(totalThreads / limit),
      totalThreads,
    });
  } catch (error) {
    console.log("Error in getAllThreads Controller due to", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
