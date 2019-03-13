const express = require('express');
const http = require('http');
const app = express();
const server = http.createServer(app);
const io = require('socket.io').listen(server);
const path = require('path');
const morgan = require('morgan');
const PORT = 3030;

// Listen to requests on port 3030
server.listen(PORT, () => console.log(`Listening on port ${ PORT }.`));

// All of our currently connected users and the connections
let users = [];
let connections = [];

// Middleware for logging request information
app.use(morgan('tiny'));

// Statically host files from the /../public directory
app.use(express.static(path.resolve(__dirname + '/../public')));


io.sockets.on('connection', socket => {
  connections.push(socket);
  console.log('Connected: %s sockets connected', connections.length);

  // Disconnect and splice from the users array
  socket.on('disconnect', () => {
    users.splice(users.indexOf(socket.username), 1);
    updateUsernames();
    connections.splice(connections.indexOf(socket), 1);
    console.log('Disconnected: %s sockets connected', connections.length);
  });

  // Send message event listener broadcasts the received message (sent from client) to all clients
  socket.on('send message', data => {
    console.log('Data', data);
    io.sockets.emit('new message', { message: data, username: socket.username });
  });

  // New user event listener broadcasts the new user (sent from client) to all clients
  socket.on('new user', (data, cb) => {
    cb(true);
    socket.username = data;
    users.push(socket.username);
    updateUsernames();
  });

  // Update usernames emits all users to all connections
  function updateUsernames() {
    io.sockets.emit('get users', users)
  }
});
