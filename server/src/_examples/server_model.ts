import express from 'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';



import MessageBrokerListener from '../src/api/communication/MessageBrokerListener';
import MessageBrokerSend from '../src/api/communication/MessageBrokerSend';
import ApplicationManager from '../src/api/ApplicationManager';

const app = express();

const messageBrokerSend = new MessageBrokerSend();

app.listen(3333, () => {
  console.log('🚀  Server started on port 3333!')
})

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*:*"
  }
});

console.log('>>>>>>>>>>>> POINTER 01')

io.on("connection", (socket) => {
  console.log('>>>>>>>>>>>> POINTER XX');
  socket.on("hello", (arg) => {
    console.log(arg); // world
  });
});

console.log('>>>>>>>>>>>> POINTER 02')

httpServer.listen(8000);








