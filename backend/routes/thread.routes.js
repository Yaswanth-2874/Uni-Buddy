import express from "express";
import { createThread, getThread } from "../controllers/thread.controller.js";
import protectRoute from "../middleware/protectRoute.js";

const threadRouter = express.Router();

threadRouter.post("/create", protectRoute, createThread);
threadRouter.get("/fetch/:_id", protectRoute, getThread);

export default threadRouter;
