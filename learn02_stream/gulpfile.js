const { src, dest } = require('gulp');

function streamTask() {
  return src('*.txt')
    .pipe(dest('output'));
}

exports.default = streamTask;