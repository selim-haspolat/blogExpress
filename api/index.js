import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRouter from "./routes/auth.js";
import userRouter from "./routes/users.js";
import blogRouter from "./routes/blogs.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
dotenv.config();

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongodb");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongodb disconnected!");
});

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  withCredentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/blog", blogRouter);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Server error";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    msg: errorMessage,
  });
});

const port = 8080;

app.listen(port, () => {
  connect();
  console.log(`Server listening on ${port}`);
});
