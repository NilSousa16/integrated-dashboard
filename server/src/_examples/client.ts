import { io } from "socket.io-client";

const socket = io("http://localhost:8000");

socket.emit("hello", "world");

console.log('Executou script ....');