const { EventEmitter } = require('events');

process.on('beforeExit', (code) => {
  console.log('Process beforeExit event with code: ', code);
});

process.on('exit', (code) => {
  console.log('Process exit event with code: ', code);
});

console.log('This message is displayed first.');

function eventEmitterTask() {
  const emitter = new EventEmitter();
  emitter.once("finish", (v)=>{
    console.log("onFinish", v);
  })
  // Emit has to happen async otherwise gulp isn't listening yet
  setTimeout(() => emitter.emit('finish'), 250);
  return emitter;
}

exports.default = eventEmitterTask;