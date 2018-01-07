var http = require('http');
var server = http.createServer();
var socket_io = require('socket.io');
server.listen(3001);
var io = socket_io();
io.attach(server);

io.on('connection', function (socket) {
    console.log('Socket connected: ' + socket.id);
    socket.on('action', (action) => {
        if (action.type === 'socket/hello') {
            console.log('Got hello data!', action.data);
            socket.emit('action', {type: 'message', data: 'good day!'});
        }
    });
});

setInterval(() => {
    const x = Math.random() * 400;
    const y = Math.random() * 400;

    io.emit('action', {
        type: 'socket/movementUpdate',
        data: {
            x,
            y
        }
    });
}, 5000);