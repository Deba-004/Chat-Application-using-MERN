import { Server } from "socket.io";
import http from "http";
import express from "express";

const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: process.env.FRONTEND_URL || "http://localhost:3000",
        methods: ["GET", "POST"],
        credentials: true
    }
});

export const getReceiverSocketId = (receiverId) => {
    return users[receiverId] || null;
};

const users = {};

io.on("connection", (socket) => {
    console.log("A user connected:", socket.id);
    const userId = socket.handshake.query.userId;
    if(userId) {
        users[userId] = socket.id;
        console.log(users);
    }

    io.emit("online", Object.keys(users));

    socket.on("disconnect", () => {
        console.log("User disconnected:", socket.id);
        delete users[userId];
        io.emit("online", Object.keys(users));
    });
});

export {app, server, io};