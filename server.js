var express = require('express');
var socket = require('socket.io');

function listen() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://' + host + ':' + port);
}

const app = express();
const server = app.listen(process.env.PORT || 3001, listen);

app.use(express.static('public'));

const io = socket(server);

io.sockets.on('connection', function(socket) {
  console.log('connection', socket.id);

  socket.on('create-room', function(room) {
    const isRoomExists = Boolean(io.sockets.adapter.rooms[room]);

    if (!isRoomExists) {
      socket.join(room);
      socket.emit('post-create-room', { status: 1, description: 'Success' });
    } else {
      socket.emit('post-create-room', { status: 2, description: 'Login failed' });
    }
  });

  socket.on('login', function(room) {
    const isRoomExists = Boolean(io.sockets.adapter.rooms[room]);

    if (isRoomExists) {
      socket.join(room);
      socket.emit('post-login', { status: 1, description: 'Success' });
    } else {
      socket.emit('post-login', { status: 2, description: 'Login failed' });
    }
  });
});

room = "abc123";
io.sockets.in(room).emit('message', 'what is going on, party people?');

io.sockets.in('foobar').emit('message', 'anyone in this room yet?');

