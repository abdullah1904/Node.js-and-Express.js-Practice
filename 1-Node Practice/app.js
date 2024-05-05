const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// On - Listen for an event
customEmitter.on('response',()=>{
    console.log('Data Received');
});

// Emit - Emit an event
customEmitter.emit('response');