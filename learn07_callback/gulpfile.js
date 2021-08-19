const fs = require('fs');

function cc(cb)
{
    console.log("cc");
    setTimeout(() => {
        cb();
    }, 1000);
}

function passingCallback(cb) {
//   fs.access('gulpfile.js', cb);
    cc(cb);
}

exports.default = passingCallback;