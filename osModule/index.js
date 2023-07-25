const os = require('os');

console.log(os.arch());
// memory in systme in byte
const freeMemory = os.freemem();
console.log(`${freeMemory / 1024 / 1024 / 1024} gb`);
console.log(os.totalmem());

// name
console.log(os.type());

// version
console.log(os.version());
console.log(os.hostname());
console.log(os.platform());