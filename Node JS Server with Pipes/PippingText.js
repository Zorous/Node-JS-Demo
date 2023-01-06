var http = require('http');
var fs = require('fs');





var server = http.createServer(function(req,res){

    res.writeHead(200, {'Content-Type' : 'text/plain'});
var readStream = fs.ReadStream(__dirname+'/readme.txt','utf-8');

//here instead of pipping it into a local file, we will pipe i into the server's response

//The benefit of this is every time we get a chunk of data we send it to the user using the pipe method so the app will be tooooo fast

    readStream.pipe(res);


})



server.listen(8888,"127.0.0.1")
console.log('the server is running on : 127.0.0.1:8888')