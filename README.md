-----------------------------------------------------------------------------NodeJS---------------------------------------------------------------------
-----------------------------------------------------------------------------------------------------------------------------------------------------------

* Node JS Actually is :
JavaScript is written to run on browsers and it doesn't to meant to deal with lower level operations.
- A Plateform which allows us to run JavaScript Code on Computer/Server;
so we no longer need to use PHP or Ruby on the server side to interact with our database,
 and no longer need to learn any other intermediate programming language than just JavaScript.

- It's also allows us to Read, Delete and Update files
- Easily communicate with database


* Why would we use Node JS : 

- first of all it uses JavaScript
- Second thing it's so fast! (runs on the V8 engine & uses non-blocking code)
- Huge ecosystem of open source packages (npm) which i already used and checked how powerful it is on React JS
- Great for real-time services like chatrooms etc..

**********************Learning Roadmap********************
	- The inner workings of Node.js	   	
		- V8 engine		   	
		- Modules				
		- Event emitter			
		- The file system
						
	- Creating a web server			
		- Routing
		- Express				
		- Templating			
						
	- Make a Node JS app			
**********************************************************
_______________________________________________________________________________________________

- The inner workings of Node.js	
------------------------------------------------------------------V8 engine------------------------------------------------------------------------------
=> It's a High Performance JS Engine created by Google and written on C++ 
V8 is a part of Node JS
What's a JS Engine : 
Computers/Servers do not understand JavaScript
so a JS engines takes a functioning JS Code and coverts it into a low level machine code.
its something like : JavaScript > C++ > Assembly Language > Machine Code.

- so the Node JS is written on C++
-In the heart or the core of node JS there's the V8 engine
- V8 engine turns JS code to Machine Code.

So with Node JS combinated with the V8 engine makes the hierarchy like this : 
JavaScript > (C++) Node JS (V8) > Machine Code


-----------------------------------------------------------------The Global Object--------------------------------------------------------
when we run JavaScript on the Browser, the global object is the window object and we can access it's properties like scroll, settimeout, close, setinterval etc..
but on Node JS we run the JavaScript Code on the computer, so the window object is not the Global objectc anymore.

The Global object in node is an object, called "Global" so our old properties like settimeout etc.. are also available in this Global Object
the first so often used property that exists on the Global Object is the "Console.log()"

Node JS also can tell us which directory or file name we are in using those :  "__dirname", "__filename"



---------------------------------------------------------------Function Expressions ( ! )---------------------------------------------------------------
const Callback = function (m){
m();
}
const test = function(){
console.log("bye bye")
}
Callback(test);

>>bye bye


-------------------------------------------------------------------Modules & Require-------------------------------------------------------------------
a module simply is another javascript file, that has another functions which we could use on other js files 
just like components on React
and to import a module on Node js we need to use the require methode that accepts the module's path as a parametre
WITHOUT forgeting to export our module (making it available for importation) 
using that : module.exports = functionName;

exe (in the test.js file) : module.exports = functionName;
exe : var test =  require('./test');

if we think about it, it's a Callback function like the example up there ( ! )



----------------------------------------------------------------------Module Paterns---------------------------------------------------------------
template strings are when we use  those `` instead of the usual '' coats
on the example above, we only made and exported a single module, and the module.exports is an object, we can pass many modules with it
 so if we want to export many we should do it like this :
first of all there's 3 ways for exporting : 
>things.js

function fct1(){}
function fct2(){}
function fct3(){}

//Methode 1 : refering
module.exports.fct1 = fct1;
module.exports.fct2 = fct2;
module.exports.fct3 = fct3;  


//Methode 2 : directly
module.exports.fct1 = function(){}
module.exports.fct2 = function(){}
module.exports.fct3 = function(){}

//Method 3 : asigning an object to the module.exports object, and btw not only functions can be exported as modules we can export even variables
module.exports = {
fct 1 : fct1,
fct2 : fct2,
vartest : vartest
}
> app.js
var things = require ('./things')
//and to use them now we could do it that way
things.fct1()
things.fct2()
things.fct3()



-------------------------------------------------------------The Node Event Emitter------------------------------------------------------------------
what we was doing so far is creating our costume Modules, and the Node JS has an in-built  modules we could use too
exe 1:  the event module
var events = require('events')

var myEmitter = new events.events.EventEmitter();

//it's so much like make a JQuery event listener.
//So what we do here is when a specific event is trigered we launch a function
myEmitter.on('someEvent',function(message){
console.log(message)
})

//here we trigered the event manually
myEmitter.emit('someEvent', 'the event was emitted')


exe 2 : the util module
var events = require('events')
var util = require('util')

var Person = function(name){
this.name = name;
}

//utils allows us to inherit other modules utilities, it takes 2 params, p1; which element u want to inherate the module to it, p2;
// which module u want to inherit.

util.inherits(Person, events.EventEmitter);

var Mordred = new Person('Mordred');
var Ryu = new Person('Ryu');
var Emi = new Person('emii');

var people = [Mordred,Ryu,Emi];

people.forEach(function(person){
person.on('speak', function(talk){
console.log(person.name + ' said : '+talk)
})
}
);

//without inheriting the event module from events using util, we wasn't would be able to trigger an event that way
Emi.emit('speak','Heyooooo!!')


-------------------------------------------------------------Reading & Writing Files ---------------------------------------------------------------
to read and write and interact with files on our computer we will need the help of one of the core Node Js modules and it's called "fs"
we import it simply that way ; 
var fs = require('fs');
_______________READING______________
to read a document we need to use the readFileSync() methode; it's a synchronous methode, so it blocks the flowing of the Code till
it accomplishes reading the document that got asigned to it. there's also an Asynchronuous version of this method,
it accepts 2 parametres, the 1st is the document's path and the 2nd is the character encoding, we are dealing with binary data after all, so we will use the "utf8" encoding mostly

exe : 
var fs = require('fs');
var Doc = fs.readFileSync('Document.txt', 'utf8')
console.log(Doc)
//it's as simple as that to read a file

_______________WRITING______________
var fs = require('fs');


//using the writeFileSync method we could make changes in files
//it accepts 2 parameters the 1st one is the file's path and the 2nd one is the changes u want to make.
//if the file does exist it will make changes on it, if it doesn't it will create one with that name and write what u have assigned to it
fs.writeFileSync('Doc.txt',"i got changed")

_______________DELETING FILE______________
//we could do that easily using the unlink method
//exe : 
fs.unlink('filePath.extension')

_______________CREATE DIRECTORY Synchronously______________
/* always using the fs module, and just as how we make a directory on DOS cmds
we could do it easily on Node js too, using the mkdirSync() methode 
exe : */
fs.mkdirSync('directorysName')

_______________DELETING DIRECTORY Synchronously______________
//we just replace mkdirSync with emdirSync
fs.rmdirSync('directorysName')

_______________CREATE DIRECTORY______________
to do it without blocking the flow of our code we need to just split the Sync word and fire a function to handle it


---------------------------------------------------------------Clients & Servers(Reminder)---------------------------------------------------------------
When the users are normally scrolling on web on a specific browser they send requests to the server, then the server handle that request and send the response to the user.
But how does the user and the server actually communicates with each other.
here when the PROTOCOLS role comes

What's a PROTOCOLE : 
a protocole is basically a set od communiaction rules, that 2 sides agree to use when communicating, there's so much famous protocoles like : 
FTP (File Transfer Protocol)
TCP
HTTP

The informations are send down the socket between the 2 computers (server and user's computer) via a protocol called TCP.
so while the data is Structured on a particular way, the way it got sent from the server to the client is via that TCP.
TCP essentailly does split the coming data into smaller little sections and transfer them along the socket.
the splitted small lil sections called SOCKETS.
So this functionality is built in our computers and Node JS gives us the ability to access to this functionality .
so if we run Node JS on the server side we could tell them what informations we wanna send out to client when they make a particular action.







