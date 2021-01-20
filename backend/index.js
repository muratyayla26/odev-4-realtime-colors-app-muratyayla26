const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const Colors = require("./clients/colors");
let port = process.env.PORT || 3000;
io.on("connection", (socket) => {
  console.log("a user connected");

  Colors.list((data) => {
    console.log("redisten gelen", data);
    socket.emit("color-received", data);
  });

  socket.on("new-color", (color) => {
    console.log(color);
    Colors.upsert(color);
    socket.broadcast.emit("receive-color", color);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(port, () => {
  console.log("listening on *:3000");
});
