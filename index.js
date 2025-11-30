const express = require('express');
const http = require('http');
const path = require('path');
const { Server } = require("socket.io");

const app = express();

//socket.io needs the actual http server instance to attach websocket upgrade handlers to it
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('new user connected: ', socket.id);
});

app.use(express.static(path.resolve("./public")));

app.get('/', (req, res) => {
    return res.sendFile("/public/index.html");
})

server.listen(9000, () => {
    console.log("Server started at port 9000");
})