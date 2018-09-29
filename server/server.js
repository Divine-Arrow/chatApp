const
    express  = require('express'),
    app      = express(),
    http     = require('http'),
    socketIO = require('socket.io');

const port = process.env.PORT || 3000

app.use(express.static('public'));
var server = http.createServer(app);
var io = socketIO(server);

io.on('connection', (socket) => {
    console.log('Connection made successfully.');
});

server.listen(port, () => {
    console.log(`Server is running in port: ${3000}`);
});