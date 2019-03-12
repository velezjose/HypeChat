const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');
const morgan = require('morgan');

let users = [];
let connections = [];

app.use(morgan('tiny'));

app.use(express.static(path.resolve(__dirname + '/../public')));

io.sockets.on('connection', socket => {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect
  socket.on('disconnect', () => {
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message
  socket.on('send message', data => {
    console.log('Data', data);
    io.sockets.emit('new message', { message: data, username: socket.username });
  });

  // New user
  socket.on('new user', (data, cb) => {
    cb(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  function updateUsernames() {
    io.sockets.emit('get users', users)
  }
});;


server.listen(3030, () => console.log('Listening on port 3030.'));
