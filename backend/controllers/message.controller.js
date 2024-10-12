import Message from "../models/message.model.js";

export const writeReply = async (req, res) => {
  try {
    const { parentMessageId, replyMessage } = req.body;

    // Current User is the author
    const authorId = req.user._id;
    console.log(parentMessageId);

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
