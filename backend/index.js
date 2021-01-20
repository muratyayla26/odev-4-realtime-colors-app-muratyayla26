const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const Colors = require("./clients/colors");

app.get("/", (req, res) => {
  res.end("hello socketio ilk yazi");
});

io.on("connection", (socket) => {
  console.log("a user connected");

  Colors.list((data) => {
    console.log("redisten gelen", data);
    socket.emit("color-received", data);
  });

  socket.on("new-color", (color) => {
    console.log(color);
    Colors.upsert(color); //burda süslü icindeydi
    socket.broadcast.emit("receive-color", color);
  });

  socket.on("disconnect", () => console.log("a user disconnected"));
});

http.listen(3000, () => {
  console.log("listening on *:3000");
});
