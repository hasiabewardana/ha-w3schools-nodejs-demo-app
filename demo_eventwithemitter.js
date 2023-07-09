var events = require('events');
var eventEmitter = new events.EventEmitter();

// Create an event handler
var myEventHandler = function(){
    console.log('I hear a scream.');
}

// Assign the event handler to the event
eventEmitter.on('scream', myEventHandler);

// Fire the 'scream' event
eventEmitter.emit('scream');