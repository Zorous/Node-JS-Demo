//The problem is whatever what request the user makes on the url, it still will render the same feedback

/* So we need to distinct between the different URLs (request(s)) and render different feedbacks,
 we need to use Routing for this 

*/


const fs = require('fs');
var http = require('http');


var server = http.createServer(function (req, res) {
    //when the user makes a different request it will log it down 
    //exe : http:127.0.0.1/home
    //>>/home
    console.log('request was made : ' + req.url)

    //Home
    if (req.url === "/home" || req.url === "/") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/index.html').pipe(res)
    }

    //contact
    else if (req.url === "/contact") {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        fs.createReadStream(__dirname + '/contact.html').pipe(res)
    }

    //data api
    else if (req.url === "/api/data") {

        //in a real application, i will get this mostly from a database like MongoDB
        var data = [
            {
                name: "Mordred",
                email: "mordred@gmail.com",
                phone: "555-555-5555"
            },
            {
                name: "John",
                email: "john@gmail.com",
                phone: "555-555-5555"
            },
            {
                name: "Mary",
                email: "mary@gmail.com",
                phone: "555-555-5555"
            }
        ]
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(data));

    }
    //NOT FOUND / Catchall
    else{
res.writeHead(404, { 'Content-Type': 'text/html' });
fs.ReadStream(__dirname+'/notfound.html').pipe(res)
    }

    //so we could know what's the user is requesting using req.url, and send them feedbacks depends on their request
})


/*
---------------------------------------------------------------------------------
IF WE HAVE MANY PAGES IT WILL BE A LIL MESS, THAT's WHY I WILL USE A PACKAGE CALLED EXPRESS
WHICH WILL MAKE THINGS A LOT EASIER
----------------------------------------------------------------------------------
*/
server.listen(4000, '127.0.0.1');
console.log('Server running at http://127.0.0.1:4000');

