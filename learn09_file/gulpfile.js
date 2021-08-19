
const { src, dest } = require('gulp');
const uglify = require('uglify-js');
const through2 = require('through2');

exports.default = function() {
  return src('src/*.ts')
    // 创建一个内联插件，从而避免使用 gulp-uglify 插件
    .pipe(through2.obj(function(file, _, cb) {
        console.log("~~~file", file)
        console.log("~~~f_", _)
        console.log("~~~cb", cb)
      if (file.isBuffer()) {
        console.log(file.contents);
        const code = uglify.minify(file.contents.toString())
        console.log(code);
        file.contents = Buffer.from(code.code + "\n//zf")
      }
      cb(null, file);
    }))
    .pipe(dest('output/'));
}









// const { src, dest } = require('gulp');
// const gulpif = require('gulp-if');
// const uglify = require('gulp-uglify');

// function isJavaScript(file) {
//   // 判断文件的扩展名是否是 '.js'
//   return file.extname === '.ts';
// }

// exports.default = function() {
//   // 在同一个管道（pipeline）上处理 JavaScript 和 CSS 文件
//   return src(['src/*.ts', 'vendor/*.txt'])
//     // 只对 JavaScript 文件应用 gulp-uglify 插件
//     .pipe(gulpif(isJavaScript, uglify()))
//     .pipe(dest('output/'));
// }









// const { src, dest } = require('gulp');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');
// const rename = require('gulp-rename');

// exports.default = function() {
//   return src('src/*.ts')
//     .pipe(babel())
//     .pipe(src('vendor/*.txt'))
//     .pipe(dest('output/'))
//     .pipe(uglify())
//     .pipe(rename({ extname: '.min.js' }))
//     .pipe(dest('output/'));
// }













// const { src, dest } = require('gulp');
// const babel = require('gulp-babel');
// const uglify = require('gulp-uglify');

// exports.default = function() {
//   return src('src/*.ts')
//     .pipe(babel())
//     .pipe(src('vendor/*.txt'))
//     .pipe(uglify())
//     .pipe(dest('output'));
// }

























// const { src, dest } = require('gulp');


// class MyEventEmitter {
//     constructor(options)
//     {
//         this._listenerCount = 0;
//         console.log("~~~MyEventEmitter", options);
//     }
//     once(emitter, eventName, options)
//     {
//         this._listenerCount ++;
//         console.log("~~~MyEventEmitter.once", emitter, eventName, options);
//         return new Promise((resolve)=>{
//             resolve(["once", 1,2,3]);
//         })
//     }
//     once(emitter, eventName, options)
//     {
//         this._listenerCount ++;
//         console.log("~~~MyEventEmitter.once2", emitter, eventName, options);
//         return new Promise((resolve)=>{
//             resolve(["once2", 1,2,3]);
//         })
//     }
//     on(emitter, eventName, options)
//     {
//         this._listenerCount ++;
//         console.log("~~~MyEventEmitter.on", emitter, eventName, options);
//         return new Promise((resolve)=>{
//             resolve(["on", 1,2,3]);
//         })
//     }
//     /** @deprecated since v4.0.0 */
//     listenerCount(emitter, eventName)
//     {
//         console.log("~~~MyEventEmitter.listenerCount", emitter, eventName);
//         return this._listenerCount;
//     }
//     /**
//      * Returns a list listener for a specific emitter event name.
//      */
//     getEventListener(emitter, eventName)
//     {
//         console.log("~~~MyEventEmitter.getEventListener", emitter, eventName);
//         return [()=>{
//             console.log("---fun")
//         }]
//     }

    
//     emit(eventName, ...args)
//     {
//         console.log("~~~MyEventEmitter.emit", emitter, ...args);
//         return true;
//     }
//     /**
//      * This symbol shall be used to install a listener for only monitoring `'error'`
//      * events. Listeners installed using this symbol are called before the regular
//      * `'error'` listeners are called.
//      *
//      * Installing a listener using this symbol does not change the behavior once an
//      * `'error'` event is emitted, therefore the process will still crash if no
//      * regular `'error'` listener is installed.
//      */
//     // static errorMonitor;
//     // static captureRejectionSymbol;
//     /**
//      * Sets or gets the default captureRejection value for all emitters.
//      */
//     // TODO: These should be described using static getter/setter pairs:
//     // static captureRejections;
//     // static defaultMaxListeners;
// }

// MyEventEmitter.defaultMaxListeners = 1000;

// class MyReadableStream extends MyEventEmitter
// {
//     constructor()
//     {
//         super();
//         this.readable = true;
//         this._isPaused = false;
//     }

//     read(size)
//     {
//         console.log("~~~MyReadableStream.read", size);
//         return "MyReadableStream.read return";

//     }
//     setEncoding(encoding)
//     {
//         console.log("~~~MyReadableStream.setEncoding", encoding);

//         return this;
//     }
//     pause()
//     {
//         this._isPaused = true;
//         console.log("~~~MyReadableStream.pause");

//         return this;
//     }
//     resume()
//     {
//         this._isPaused = false;
//         console.log("~~~MyReadableStream.resume");

//         return this;
//     }
//     isPaused()
//     {
//         console.log("~~~MyReadableStream.isPaused");

//         return this._isPaused;
//     }
//     pipe(destination, options)
//     {
//         console.log("~~~MyReadableStream.pipe", destination, options);
//         return destination;
//     }
//     unpipe(destination)
//     {
//         console.log("~~~MyReadableStream.unpipe", destination);
//         return this;
//     }
//     unshift(chunk, encoding)
//     {
        
//         console.log("~~~MyReadableStream.unshift", chunk, encoding);
//     }
//     wrap(oldStream)
//     {
//         console.log("~~~MyReadableStream.wrap", oldStream);
//         return this;
//     }
// }

// class MyWritableStream extends MyReadableStream
// {
//     constructor()
//     {
//         super();
//         this.writable = true;
//     }
//     write(buffer, cb)
//     {
//         console.log("~~MyWritableStream.write", buffer, typeof buffer, cb);
//         cb();
//         return true;
//     }

//     write(str, encoding, cb)
//     {
//         console.log("~~MyWritableStream.write2", str, encoding , cb);
//         cb();
//         return true;

//     }
//     end(cb)
//     {
//         console.log("~~MyWritableStream.end");
//         cb();
//     }
//     end(data, cb)
//     {
//         console.log("~~MyWritableStream.end2", data, typeof data, cb);
//         cb();

//     }
//     end(str, encoding, cb)
//     {
//         console.log("~~MyWritableStream.end3", str, encoding, cb);
//         cb();
//     }



// }

// function myDest(folder, opt=null)
// {
//     console.log("~~myDest",folder, opt);
//     return new MyWritableStream();
// }

// exports.default = function() {
//   return src('src/*.ts')
//     .pipe(myDest('output/'));
    
//     // .pipe(dest('output/'));
// }