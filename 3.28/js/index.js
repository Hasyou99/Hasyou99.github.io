var s = document.querySelector('section')
var m = document.querySelector('main')
var d = document.querySelector('div')
var h = document.querySelector('h1')
/**
 * 通过addEventListener添加事件传递三个参数
 * 参数一  事件类型
 * 参数二  事件处理函数
 * 参数三  是否捕获阶段触发（可选参数，默认值为false）
 * 
 * 事件传递分两个流程
 * 捕获（挖洞）阶段和冒泡阶段
 * 多个叠加的容器添加click事件之后
 *     捕获阶段从容器的最外层开始逐级出发
 *     到达当前触发事件的标签之后开始执行冒泡阶段，从内到外逐级触发
 * 当事件的触发者上有捕获和冒泡事件同时存在时，和添加的先后顺序有关
 * js中难懂的知识点：：对象，闭包，回调函数，事件传播
 */

s.onclick = function(e){
    console.log(e)
    console.log('section clicked by onclick function')
}
//  通过onclick注册（添加）的事件在冒泡阶段被触发
//    如果存在有通过addEventlistener添加的事件冒泡阶段事件
//    那么事件执行的顺序和我注册（添加）的先后顺序有关系

s.addEventListener('click',function(params){
    console.log(params)
    console.log('section clicked --捕获')
},true)
s.addEventListener('click',function(params){
    console.log(params)
    console.log('section clicked --冒泡')
})
s.addEventListener('click',function(p){
    console.log(p)
    console.log('section clicked --冒泡2')
})


m.addEventListener('click',function(params){
    console.log(params)
    console.log('main clicked')
    //params.stopImmediatePropagation();  //立即停止时间传播  /在捕获阶段停止事件的传播，自身的其他事件也会停止

    params.stopPropagation();  //停止事件传播，1.在捕获阶段停止事件传播，会停止自身事件的传播
    //2.当初发着是本身时，如果本身有冒泡事件，那么本身事件会被触发，不会往上进行冒泡
    //3.如果触发者是其子元素时，事件传播至本身会停止
},true)                         // 

m.addEventListener('click',function(params){
    console.log(params)
    console.log('main clicked --冒泡')
})
m.addEventListener('click',function(params){
    console.log(params)
    console.log('main clicked --冒泡2')
})
m.addEventListener('click',function(params){
    console.log(params)
    console.log('main clicked 2')
},true)

d.addEventListener('click',function(params){
    console.log(params)
    console.log('div clicked')
})

h.addEventListener('click',function(params){
    console.log(params)
    console.log('h1 clicked')
})