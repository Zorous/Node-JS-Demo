var fs = require('fs');

var http = require('http');

/* 
We can make our own custom stream in Node JS,
first of all we need to use the fs module, so we can read documents through the streams
createReadStream() : => takes a parameter that has the directory name u are in concatenated with the file name, it also had a custom 3rd parametre and it's the type of the return ('utf-8',...)
also there's an event called DATA in the readStream, which allows us to listen to any kind of chunk of data from the stream */

//it will read it a lil bit per time, and split the data before pass it in chunks to the variable
var myReadStream = fs.ReadStream(__dirname+"/ReadMe.txt",'utf-8')

//using this variable we will write every received chunk in a WriteMe.txt file, its will write on it if its already exists or create it if it doesn't
var myWriteStream = fs.WriteStream(__dirname+"/WriteMe.txt")


//we use a data event to listen to the variable when each chunk of the data arrives
//it takes 2 parameters. p1; the event. p2; a fired function on that event that has chunk as a parameter

myReadStream.on('data',function(chunk){
    console.log('A new chunk has arrived')
    // console.log(chunk);

    //it has pre-defined method called write(), we use it to write on files
    myWriteStream.write(chunk)
})

