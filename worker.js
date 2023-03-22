// worker.js

const { parentPort } = require('worker_threads');

parentPort.on('message', (data) => {
  parentPort.postMessage("hello");
});