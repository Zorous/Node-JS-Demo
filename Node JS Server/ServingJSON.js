
var http = require('http');


var server = http.createServer(function(req,res){
    //all what we do is change the causal text/plain response type to application/json
    
    res.writeHead(200, {'Content-Type': 'application/json'});
    var JSONObject = {
    name : 'Oussama',
    job : "Full Stack",
    age : 19,
    }

    //we cant write down there end(JSONObject), bcs it expects a string or a buffer as a parameter
    
    //so we will serialize it first
    res.write(JSON.stringify(JSONObject));

    res.end();
})




server.listen(4000,'127.0.0.1');
console.log('Server running at http://127.0.0.1:4000');

