const path = require("path");
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');


const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3000;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('New user connected');

  socket.emit('newEmail', {
    from:'test@example.com',
    text:"Hey Whats going on ?",
    createdAt: 123
  });

  socket.on('createEmail', (email)=>{
    console.log('Create email ', email);
  });

  socket.emit('newMessage', {
    from:'Pappu',
    text:"God bless you." ,
    createdAt: 231
  });

  socket.on('createMessage', (msg)=>{
    console.log('Create Message :', msg);
  });

  socket.on('disconnect', ()=>{
    console.log('Client disconnected');
  });

});

server.listen(port, ()=> {
  console.log(`Server is up on port ${port}`);
});
