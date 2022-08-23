import express from 'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

const app = express();

app.listen(3333, () => {
  console.log('🚀  Server started on port 3333!')
})

const httpServer = createServer(app);
const io = new Server(httpServer, { /* options */ });

console.log('>>>>>>>>>>>> POINTER 01')

io.on("connection", (socket) => {
  console.log('>>>>>>>>>>>> POINTER XX');
  socket.on("hello", (arg) => {
    console.log(arg); // world
  });
});

console.log('>>>>>>>>>>>> POINTER 02')

httpServer.listen(8000);








