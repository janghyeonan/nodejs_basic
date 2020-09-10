const EventEmitter = require('events');

//crate class
class Myemitter extends EventEmitter { }

//init object
const myEmitter = new Myemitter();

//Evnet listener
myEmitter.on('event', () => console.log('event fired!'));

//init event
myEmitter.emit('event');