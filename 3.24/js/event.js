/**
 * 
 * 
 */
console.log(this)
//事件处理函数
function clickHandle(str,tagIndex){
    console.group('click点击事件')
    console.log(tagIndex);
    console.log(str);
    console.log(this);   //在js中，默认的this的window对象

    console.log(event);
    console.groupEnd('click点击事件')
}

var fifthDiv = document.querySelector('.fifth');
fifthDiv.onclick = clickHandle;   //此种方法调用会传递一个默认参数event，等价于clickHandle（event）

// 再次绑定事件时，会覆盖上一次的事件，只会最后一次生效
//xx.onclick = xxx //相当于为属性赋值，复制之后属性值会被覆盖
fifthDiv.onclick = function(e){
    console.log(e);
    alert('aaaaa')
}