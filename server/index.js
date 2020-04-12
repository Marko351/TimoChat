const express = require('express');
const http = require('http');
const dbConfig = require('./config/dbConfig');
const headersConfig = require('./config/headersConfig');
const routesConfig = require('./config/routesConfig');
const docsConfig = require('../swaggerDoc');
const middlewareConfig = require('./config/middlewareConfig');
// const socketIO = require('socket.io');

const app = express();

// Database Configuration
dbConfig();

// Middleware Configuration
middlewareConfig(app);

//Headers Configuration
headersConfig(app)

// Routes API Configuration
routesConfig(app);

// Docs Configuration
docsConfig(app);

const server = http.createServer(app);
// const io = socketIO(server);

// io.on('connection', (socket) => {
//   console.log('Connected to socket');
//   socket.on('join', async (room) => {
//     console.log('ROOM', room);
//     // socket.join(room);
//     socket.emit('roomJoined', room);
//   });

//   socket.on('join 2', (room) => {
//     console.log('ROOM 2', room);
//   });
// });

const PORT = '5500';

server.listen(PORT, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log(`App is up and running on port: ${PORT}`);
  }
});