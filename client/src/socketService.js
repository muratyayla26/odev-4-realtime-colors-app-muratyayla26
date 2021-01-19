import { io } from "socket.io-client";

let socket;

export const initializeSocket = () => {
  socket = io("http://localhost:3000", {
    transports: ["websocket"],
  });
  console.log("connecttting..");
  socket.on("connect", () => console.log("connected"));
};

export const disconnectSocket = () => {
  console.log("disconnectiong...");
  if (socket) {
    socket.disconnect();
  }
};

export const sendColor = (color) => {
  if (socket) {
    socket.emit("new-color", color);
  }
};

export const subscribeToColor = (cb) => {
    if(!socket) return true;

    socket.on("receive-color", (color)=>{
        console.log("color received", color);
        cb(color);
    });
};