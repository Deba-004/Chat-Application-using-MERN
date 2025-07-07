import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import userRoute from "./route/user.route.js";
import messageRoute from "./route/messege.route.js";
import cors from "cors";
import { app, server } from "./socketio/server.js";

dotenv.config({ path: "./.env" });

app.use(express.json());
app.use(cookieParser());
app.use(cors());

const PORT = process.env.PORT || 5001;
const URI = process.env.MONGODB_URI;

try {
    mongoose.connect(URI);
    console.log("Connected to MongoDB");
} catch (error) {
    console.error("Error connecting to MongoDB:", error);
}

app.use("/user", userRoute);
app.use("/message", messageRoute);

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
});