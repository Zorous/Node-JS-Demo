//The problem is whatever what request the user makes on the url, it still will render the same feedback

/* So we need to distinct between the different URLs (request(s)) and render different feedbacks,
 we need to use Routing for this 

*/


var http = require('http');


var server = http.createServer(function(req,res){
    //when the user makes a different request it will log it down 
    //exe : http:127.0.0.1/home
    //>>/home
    console.log('request was made : '+req.url)
    res.writeHead(200, {'Content-Type': 'text/plain'});
 
//so we could know what's the user is requesting using req.url, and send them feedbacks depends on their request
    res.end('yoooop');
})




server.listen(4000,'127.0.0.1');
console.log('Server running at http://127.0.0.1:4000');

