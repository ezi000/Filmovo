import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoutes from "./api/routes/users.js";
import dotenv from "dotenv";
import cors from "cors";
dotenv.config();

mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_NAME}.ihmeufb.mongodb.net/`
);

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(cors());
app.use("/users", userRoutes);

app.use((req, res, next) => {
  res.status(404).json({ message: "Not found" });
});

export default app;
