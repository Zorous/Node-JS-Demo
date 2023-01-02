//to read and write files on our computer we will need to use the help of one of Node Js's  core module and it's called "fs"
//we import it simply that way 
var fs = require("fs");


/* to read a document we need to use the readFileSync() methode; it's a synchronous methode, so it blocks the flowing of the Code till
it accomplishes reading the document that got asigned to it. there's also an Asynchronuous version of this method,
it accepts 2 parametres, the 1st is the document's path and the 2nd is the character encoding, we are dealing with binary data after all, so we will use the "utf8" encoding mostly */

var res = fs.readFileSync("Doc.txt","utf8")
console.log(res)