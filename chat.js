var net = require('net');

var server = net.createServer();

server.on('connection', function(socket){
	console.log('got a new connection');
	socket.on('data',function(data){
		console.log('got data:',data);
	});
	
});

server.on('error',function(err){
	console.log('server error:', err.message);

});

server.on('close',function(){
	console.log('server closed');

});

server.listen(4001);