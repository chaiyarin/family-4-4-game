const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const cors = require('cors');

const app = express();
// Use CORS middleware
app.use(cors());

const server = http.createServer(app);

const io = socketIo(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        credentials: true
    }
});

io.on('connection', (socket) => {
    console.log('a user connected');

    socket.on('send-display', (data) => {
        console.log(data);
        io.emit('receive-display', data);
    });

    socket.on('send-random', (data) => {
        console.log(data);
        io.emit('receive-random', data);
    });

    socket.on('send-open-answer', (data) => {
        console.log(data);
        io.emit('receive-open-answer', data);
    });

    socket.on('send-race-speed', (data) => {
        console.log(data);
        io.emit('receive-race-speed', data);
    });

    socket.on('send-incorrect-answer', (data) => {
        io.emit('receive-incorrect-answer', data);
    });

    socket.on('send-send-point-team', (data) => {
        io.emit('receive-send-point-team', data);
    });

    socket.on('send-game', (data) => {
        io.emit('receive-game', data);
    });

    socket.on('send-timer', (data) => {
        io.emit('receive-timer', data);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

});

server.listen(3000, () => {
    console.log('listening on *:3000');
});
