var fs = require('fs');


//using the writeFileSync method we could make changes in files
//it accepts 2 parameters the 1st one is the file's path and the 2nd one is the changes u want to make.
//if the file does exist it will make changes on it, if it doesn't it will create one with that name and write what u have assigned to it
fs.writeFileSync('Doc.txt',"i got changed")