const { series,parallel } = require('gulp');


function defaultTask(cb) {
    console.log("~~~~defaultTask begin");
    var count = 0;
    var handler = setInterval(() => {
        count ++;
        console.log("~~~~defaultTask loop", count);
        if(count >= 5)
        {
            cb();
            clearInterval(handler);
            console.log("~~~~defaultTask end");
        }
    }, 100);
  }

  function testA(cb)
  {
    console.log("~~~testA begin", );

    var count = 0;
    var handler = setInterval(() => {
        count ++;
        console.log("~~~~testA loop", count);
        if(count >= 5)
        {
            cb();
            clearInterval(handler);
            console.log("~~~~testA end");
        }
    }, 100);

  }

  
  function testB(cb)
  {
    console.log("~~~testB", );
    cb();
    console.log("~~~testB 2", );

  }

  function clean(cb) {
    console.log("~~~~~~clean");
    // body omitted
    cb();
  }
  
  function cssTranspile(cb) {
    console.log("~~~~~~cssTranspile");
    // body omitted
    cb();
  }
  
  function cssMinify(cb) {
    console.log("~~~~~~cssMinify");
    // body omitted
    cb();
  }
  
  function jsTranspile(cb) {
    console.log("~~~~~~jsTranspile");
    // body omitted
    cb();
  }
  
  function jsBundle(cb) {
    console.log("~~~~~~jsBundle");
    // body omitted
    cb();
  }
  
  
  // 将任务设置为public
  exports.testA = testA;




  // series 组合任务, 串行，第一个cb后才执行第二个task
//   exports.default = series(defaultTask, testA);

  // series 组合任务, 并行，同时执行task
//   exports.default = parallel(defaultTask, testA);




  exports.default = series(
      defaultTask, 
      testA, 
      parallel(
        clean,
        cssTranspile,
        cssMinify,
        jsTranspile,
        jsBundle
      ));
