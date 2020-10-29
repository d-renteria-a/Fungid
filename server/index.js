// const express = require('express');
// const bodyParser = require('body-parser');
// const http = require('http');
// const socketio = require('socket.io');
// const routes = require('./routes');
// const cors = require('cors')
// const app = express();

// app.use(cors());

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: false }));

// app.use(express.static('public'));
// app.use(express.static('node_modules'));

// app.use('/api/', routes);

// let port = process.env.PORT || 8080;

// if (process.env.NODE_ENV === 'production') {
//     // Express will serve up production assets
//     // like our main.js file, or main.css file!
//     app.use(express.static('client/build'));
  
//     // Express will serve up the index.html file
//     // if it doesn't recognize the route
//     const path = require('path');
//     app.get('*', (req, res) => {
//       res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//     });
// }

// //socketio set up
// const server = http.createServer(app);
// const io = socketio(server);
// // setting up the connection and default message event
// io.on('connection', (socket) => {
//   console.log('new user connected')
//   // socket.emit('connection', null)
//   socket.on('message', ({name, message}) => {
//     console.log('received a message')
//     io.emit('message', {name, message })
//   })
// });

// server.listen(port, function () {
//     console.log('Listening on port ' + port);
// });
  