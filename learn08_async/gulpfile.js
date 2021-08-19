const fs = require('fs');

async function asyncAwaitTask() {
//   const { version } = fs.readFileSync('package.json');
//   console.log(version);
//   await Promise.resolve('some result');

    await new Promise((resolve)=>{
        console.log("begin");
        setTimeout(() => {
            console.log("end");
            resolve();
        }, 1000);
    })
}

exports.default = asyncAwaitTask;