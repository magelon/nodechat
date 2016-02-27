

var net = require('net');

var port = 4000;

var host="www.acme.com";

var conn= net.createConnection(port,host);

function connectionListener(conn){
	console.log('We have a new connection');
}

var conn = net.createConnection(port, connectionListener);

conn.write('Here is a string for you!');

var buffer = new Buffer('Hello World!');

conn.write(buffer);

conn.on('data',function(data){
	console.log('some data has arrived:',data);
});