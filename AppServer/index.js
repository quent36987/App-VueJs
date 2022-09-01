const app = require('express')();
const http = require('http').createServer(app);


let players = [];

const io = require("socket.io")(http, {
	cors: {
		origins: [
			"http://localhost:3001",
			"http://localhost:4200",
			"http://localhost:8080"
		],
    credentials: true
	},
});

app.get('/', (req, res) => {
  res.send('<h1>Hey Socket.io</h1>');
});

io.use(async (socket, next) => {
  const token = socket.handshake.auth.token;
  try {
    console.log('token', token);
    socket.user = token;
    next();
  } catch (e) {
    console.log('error !', e.message);
    return next(new Error(e.message));
  }
});

io.on('connection', (socket) => {
  // join user's own room
  //socket.join(socket.user.id);
  players.push(socket);

  socket.join('game');

  console.log('a user connected');
  socket.on('disconnect', () => {
    players = players.filter((i) => i.user.id !== socket.user.id )
    console.log('user disconnected');
    console.log('users remaining',players);
  });

  socket.on('message', (msg) => {
    console.log('message: ' + msg.message + " from " + socket.user);
    socket.broadcast.emit('message', {user : socket.user, message:msg.message});
  });

  /*socket.on('join', (roomName) => {
    console.log('join: ' + roomName);
    socket.join(roomName);
  });*/

  /*socket.on('message', ({message, roomName}, callback) => {
    console.log('message: ' + message + ' in ' + roomName);

    // generate data to send to receivers
    const outgoingMessage = {
      name: socket.user.name,
      id: socket.user.id,
      message,
    };
    // send socket to all in room except sender
    socket.to(roomName).emit("message", outgoingMessage);
    callback({
      status: "ok"
    });
    // send to all including sender
    // io.to(roomName).emit('message', message);
  })*/
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});

process.stdin.once('data' , data => {
  console.log('goo ' + data)
  io.emit('my broadcast', `server: READY`);
})
