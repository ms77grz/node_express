const os = require('os');

// DESTRUCTURING
// const { cpus } = require('os');
// console.log(cpus());

// ---info about current user
// const user = os.userInfo();
// console.log(user);

// ---method returns the system uptime in seconds
// console.log(`The System Uptime is ${os.uptime()} seconds`);

// ---total information about current os
const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem() / 1024 / 1024,
  freeMem: os.freemem(),
};

console.log(currentOS);
