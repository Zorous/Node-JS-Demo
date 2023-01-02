//to read and write files on our computer we will need to use the help of one of Node Js's  core module and it's called "fs"
//we import it simply that way 
var fs = require("fs");


/* to read a document we need to use the readFileSync() method; it's a synchronous method, so it blocks the flowing of the Code till
it accomplishes reading the document that got assigned to it. there's also an Asynchronuos version of this method,
it accepts 3 parameters, the 1st is the document's path and the 2nd is the character encoding, we are dealing with binary data after all, so we will use the "utf8" encoding mostly
the 3rd parameter is a function
*/

var res = fs.readFileSync("Doc.txt","utf8")



//to use the other Asynch version of it we do simply split the Sync part, the 3rd parameter is firing a function

var res = fs.readFile("Doc.txt","utf8",function(err,data){
    if(err){
        console.log(err);
    }
    else{
        console.log(data);
    }
});

//like that we are not blocking the flow of code

fs.readFile()
console.log(res)