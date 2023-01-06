var http = require('http');
var fs = require('fs');





var server = http.createServer(function(req,res){

//instead of letting the response type text, we change it to HTML
    res.writeHead(200, {'Content-Type' : 'text/html'});

var readStream = fs.ReadStream(__dirname+'/index.html','utf-8');



    readStream.pipe(res);


})



server.listen(8000,"127.0.0.1")
console.log('the server is running on : 127.0.0.1:8000')