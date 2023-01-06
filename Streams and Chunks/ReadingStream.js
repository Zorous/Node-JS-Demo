var fs = require('fs');

var http = require('http');

var myReadStream = fs.ReadStream(__dirname+"/Lorem.txt",'utf-8')

myReadStream.on('data',function(chunk){
    console.log('A new chunk has arrived')
    console.log(chunk);
})

