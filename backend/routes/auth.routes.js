import express from "express";
import { login } from "../controllers/auth.contoller.js";

const authRouter = express.Router();

authRouter.get('/login', login)

export default authRouter;