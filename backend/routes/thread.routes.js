import express from "express";
import {
  createThread,
  getAllThreads,
  getThread,
  getAlltags
} from "../controllers/thread.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const threadRouter = express.Router();

threadRouter.post("/create", protectRoute, createThread);
threadRouter.get("/fetch/:_id", protectRoute, getThread);
threadRouter.get("/all", protectRoute, getAllThreads);
threadRouter.get("/tags/getALl", protectRoute, getAlltags);

export default threadRouter;