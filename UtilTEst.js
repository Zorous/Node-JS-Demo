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
Ryu.emit('speak','Yelloo!')
Emi.emit('speak','Yooo!!')