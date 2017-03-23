/*
    *js是单线程的，

 */

function func(msg){
    console.log(msg);
}

func('我是一段文字');

// js中没有方法名的方法叫匿名方法
var fun = function(params){
    console.log(params);
}
console.dir(fun);
fun('我是另一段文字');

//setTimeout延迟执行一个方法
// 参数1；回调函数
// 参数2：延迟时间（毫秒单位）
setTimeout(function(){
    console.log('五秒钟已经过去...')
},5000)
console.log('程序已经执行完成..')

 function logOut(k){
     setTimeout(function(){
        console.log(k);
    },5000) 
}

function loop(){
    console.time('执行循环');
    for(var i=0;i<5;i++){
       
        logOut(i);

        // setTimeout(function(){
        //     console.log(i);
        // },5000)  setTimeout位于for循环内部时，输出数始终是循环后的最大数（即是5）；
    }
    console.timeEnd('执行循环')
}
loop();

// 匿名函数自调用
(function(){
    console.log('我是一个匿名函数');
})();

// setInterval: 间隔一定时间后出发一个回调函数
//  参数1；回调函数
//  参数2:  时间间隔，毫秒
var timer = setInterval(function(){
    console.log('-------');
},1000);

setTimeout(function(){
    clearInterval(timer);   //停止计时器操作；
},5000);
