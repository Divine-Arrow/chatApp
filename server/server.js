const
    express = require('express'),
    app = express(),
    http = require('http'),
    socketIO = require('socket.io');

const port = process.env.PORT || 3000

app.use(express.static('public'));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {

    socket.on('chat', (data) => {
        io.sockets.emit('chat', data);
    });

    socket.on('typing', (data) => {
        socket.broadcast.emit('typing', data);
    });

    socket.on('notTyping', () => {
        socket.broadcast.emit('notTyping');
    });

});

server.listen(port, () => {
    console.log(`Server is running in port: ${3000}`);
});