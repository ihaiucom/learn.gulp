function pick(){
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('挑拣完成',new Date());
            resolve();
        },500);
    });
    return p;
}
function groundMouth(){
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('磨口完成',new Date());
            resolve();
        },400);
    });
    return p;
}
function blow(){
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('吹气完成',new Date());
            resolve();
        },300);
    });
    return p;
}
function PEbag(){
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('已套PE袋',new Date());
            resolve();
        },200);
    });
    return p;
}
function pack(){
    var p=new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log('装箱结束',new Date());
            resolve();
        },100);
    });
    return p;
}

function defalutTask()
{
    return pick()
    .then(function(data){
        return groundMouth();
    })
    .then(function(data){
        return blow();
    })
    .then(function(data){
        return PEbag();
    })
    .then(function(data){
        return pack();
    })

}


  exports.default = defalutTask;