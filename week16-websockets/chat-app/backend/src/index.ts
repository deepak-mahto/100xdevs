import { WebSocketServer } from "ws";
const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
wss.on("connection", (socket) => {
  userCount = userCount + 1;
  console.log(`User connected #${userCount}`);

  socket.on("message", (message) => {
    console.log(`Message recieved ${message.toString()}`);
    setTimeout(() => {
      socket.send(`${message.toString()}: sent from the server`);
    }, 1000);
  });
});
