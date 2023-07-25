const EventEmitter = require('events')

const event = new EventEmitter();

event.on("sayMyName", (sc, msg) => {
    console.log(
        `my name id ajmal. status code is ${sc} and final msg is ${msg}`
    )
});

event.emit('sayMyName', 200, "ok");