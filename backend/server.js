import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRouter from "./routes/auth.routes.js";
import estabilshDbConnection from "./database/establishDbConnection.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/api/auth", authRouter);

app.listen(PORT, () => {
  console.log(`Listening on Port ${PORT}`);
  estabilshDbConnection();
});
