// const os = require('os');

// let totalMemory = os.freemem();
// let freeMemory = os.freemem();

// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);

const EventEmitter = require('events');
//const { emit } = require('process');
//NOTE: EventEmitter is a container for related properties and functions called objects

// Class defines properties and behaviours of a concept and an object is the actual instance of that class

// Class/police department: An imaginary object which can be used to make (instantiation) other objects/policemen (intances). Classes contain blocks of code/policing (methods) that can be used to be perform particular tasks. Tasks/policing can be performed by objects/policemen (methods are invoked using objects). Other blocks of code (properties or attributes) can be used to alter the behaviour and or appearance of the Class instances (objects). 

const emitter = new EventEmitter();

//Listener; a function that will be called when an event is raised.

//register a listener. A listener must be registered before an event is emitted
emitter.on('messagelogged', arg => {
 console.log('message logged', arg);
})

//emit an event
emitter.emit('messagelogged' /*can pass an event argument at this point*/, {id: 1, name: 'Asuman', url: 'url'})

emitter.on('logging', arg => console.log(arg))

emitter.emit('logging', {data: 'message'})