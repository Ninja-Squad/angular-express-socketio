var express = require('express')
  , app = express()
  , server = require('http').createServer(app)
  , io = require('socket.io').listen(server);

app.use(express.static(__dirname + '/'));

var port = process.env.PORT || 9003;

server.listen(port);

var votes = [ 
  { choice: 1, label: 'VanillaJS', votes: 0 },
  { choice: 2, label: 'AngularJS', votes: 0 },
  { choice: 3, label: 'BackboneJS', votes: 0 },
  { choice: 4, label: 'EmberJS', votes: 0 }
];

io.sockets.on('connection', function (socket) {
  socket.emit('votes', { votes: votes });
  socket.on('vote', function(msg){
  	console.log(msg);
  	votes[msg.vote-1].votes++;
  	io.sockets.emit('votes', { votes: votes });
  })
});
