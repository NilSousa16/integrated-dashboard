import express from 'express';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import MessageBrokerSend from '../src/api/communication/MessageBrokerSend';
import ApplicationManager from '../src/api/ApplicationManager';

const app = express();

const messageBrokerSend = new MessageBrokerSend();

app.get('/', (request, response) => {  
  
  return response.json({ message: '💥 Start listener ...' });
})

// app.get('/send', async (request, response) => {  
//   messageBrokerSend.execute();
//   return response.json({ message: '🚛  Send message ...' });
// })

// app.listen(3333, () => {
//   console.log('🚀  Server started on port 3333!')
// })

// Instantiating the web socket (port 8000) - server side
// https://socket.io/docs/v4/server-instance/
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
    credentials: true
  }
});

httpServer.listen(8000);

// Starting communication with the message broker
const applicationManager = new ApplicationManager();
applicationManager.startBrokerListeners(io);
