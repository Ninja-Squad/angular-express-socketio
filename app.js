var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/'));

server.listen(9003);

var votes = [ 
  { choice: 1, votes: 0 },
  { choice: 2, votes: 0 },
  { choice: 3, votes: 0 },
  { choice: 4, votes: 0 },
  { choice: 5, votes: 1 }
];

io.sockets.on('connection', function (socket) {
  socket.emit('votes', { votes: votes });
  socket.on('vote', function(msg){
  	console.log(msg);
  	votes[msg.vote-1].votes++;
  	io.sockets.emit('votes', { votes: votes });
  })
});