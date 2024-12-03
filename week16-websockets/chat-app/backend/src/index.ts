import { WebSocketServer, WebSocket } from "ws";
const wss = new WebSocketServer({ port: 8080 });

let userCount = 0;
let allSockets: WebSocket[] = [];
wss.on("connection", (socket) => {
  allSockets.push(socket);

  userCount = userCount + 1;
  console.log(`User connected #${userCount}`);

  socket.on("message", (message) => {
    console.log(`Message recieved ${message.toString()}`);
    // for (let i = 0; i < allSockets.length; i++) {
    //   const socket = allSockets[i];
    //   socket.send(`${message.toString()}: sent from the server`);
    // }
    allSockets.forEach((socket) => {
      socket.send(`${message.toString()}: sent from the server`);
    });
  });
});
