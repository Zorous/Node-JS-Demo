/* To create a server, we need the help of an HTTP module, this module has a methode called "createServer()" that could help us to create a server,
it accepts a function as a parametre that's has 2 parametres (requestObject,ResponseObject) to deal with the server requests.
the RequestObject comes loaded with the details about the request that has been made.
the responseObject is something we use to send response to the client. */

var http = require('http');


/* A Response Headers is where we specify the Response's type, each response type can be treated differently (JSON,HTML,XML...)
it has also the Response Status (200(OK),404(NOT FOUND)) */

var server = http.createServer(function(req,res){

    //when the user makes a different request it will log it down 
    //exe : http:127.0.0.1/home
    //>>/home
    console.log("X"+req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Awwesome')
})



//it still wouldn't work bcs we didn't specify a PORT number which it should listen to,
// so we need to set  it to listen to a particular PORT on Requests

server.listen(8888,'127.0.0.1');
console.log('Server running at http://127.0.0.1:8888');

//Now the server is running on this address