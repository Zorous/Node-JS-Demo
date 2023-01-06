var fs = require('fs');
var http = require('http');

var ReadStream = fs.ReadStream(__dirname+'/ReadMe.txt');
var WriteStream = fs.WriteStream(__dirname+'/WriteMe.txt');



/* This process of reading data from a Read Stream and tranfering data via the WriteStream is quire commune in Node JS

that's why there's pipes

a pipe can help us do exactly the same thing, on the commune way after we read Data we transfer it manually using the writeStream
BUT using a pipe we can do the writing process automatically (pipping it)

From Readable to Writable Stream ( ✅)
From a Writable to a Readable Stream (❎)

 */

ReadStream.pipe(WriteStream)

/*
What if we want to send back to the user the content of our ReadMe file, 
we will need a server
*/
