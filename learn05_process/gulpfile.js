const { exec } = require('child_process');

function childProcessTask() {
  return exec('mkdir abc');
  // return exec('date');
}

exports.default = childProcessTask;