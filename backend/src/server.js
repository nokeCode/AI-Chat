require("dotenv").config();

const http = require("http");
const app = require("./app");

const { Server } = require("socket.io");
const socketHandler = require("./socket");

const server = http.createServer(app);

const io = new Server(server, {
  cors: { origin: "*" },
});

socketHandler(io);

server.listen(process.env.PORT, () => {
  console.log("🚀 Server running on port", process.env.PORT);
});