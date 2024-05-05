// Events
// -> Event Driven Programming
// -> Used heavily in Node.js
const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// On - Listen for an event
customEmitter.on('response',(name,id)=>{
    console.log('First Data Received');
    console.log(id,name)
});

customEmitter.on('response',()=>{
    console.log('Second Data Received');
});

// Emit - Emit an event
customEmitter.emit('response','John',34);

// NOTES POINTS
// -> we can have as many methods we want 
// -> order matters, we first listen and then emit
// -> we can pass arguments when we're emitting the event