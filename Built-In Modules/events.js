var myEmitter = new events.EventEmitter();

//it's so much like make a JQuery event listener.
//So what we do here is when a specific event is trigered we launch a function
myEmitter.on('someEvent',function(message){
console.log(message)
})

//here we trigered the event manually
myEmitter.emit('someEvent', 'the event was emitted')
