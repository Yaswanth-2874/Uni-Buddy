import express from "express";
import {
  getMessage,
  toggleLike,
  writeReply,
} from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRouter = express.Router();

messageRouter.post("/reply", protectRoute, writeReply);
messageRouter.post("/:messageId/toggle-like", protectRoute, toggleLike);
messageRouter.get("/:messageId/get", protectRoute, getMessage);

export default messageRouter;
