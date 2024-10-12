import express from "express";
import { writeReply } from "../controllers/message.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const messageRouter = express.Router();

messageRouter.post("/create", protectRoute, writeReply);

export default messageRouter;