import "reflect-metadata";
import "express-async-errors";
import express, { Application } from "express";
import { userRoutes } from "./routes/user/user.routes";
import { handleErrors } from "./error";
import { loginRoutes } from "./routes/login/login.routes";
import { adminRoutes } from "./routes/admin/admin.routes";
import http from "http";
import { Server } from "socket.io";
import cors from "cors";

export const app: Application = express();
app.use(express.json());
app.use(cors());

app.use("/users", userRoutes);
app.use("/login", loginRoutes);
app.use("/admin", adminRoutes);

app.use(handleErrors);

export const serverHttp = http.createServer(app);

const io = new Server(serverHttp, {
  cors: {
    origin: "*",
  },
});

io.on("connection", (socket) => {
  socket.on("message", (message) => {
    socket.broadcast.emit("message", message);
    console.log(message);
  });
});
