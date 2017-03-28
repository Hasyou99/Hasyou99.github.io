/**
 * event.target//   触发事件的对象
 * event.currentTarget  //绑定事件的对象
 * @param {any} event 
 */
function ulClickHandle(event) {
    console.group('clicked....')
    console.log(event.target)
    console.log(event.currentTarget)
    console.groupEnd('clicked....')
}

function btnClickHandle(event) {
    console.group('clicked....')
    console.log(event.target)
    console.log(event.currentTarget)
    console.groupEnd('clicked....')
}


var arrH = document.querySelectorAll('h1')
for (var i = 0; i < arrH.length; i++) {
    arrH[i].onclick = function (e) {
        console.log(i); ///5
    }
}

var arrH = document.querySelectorAll('h1')
for (var i = 0; i < arrH.length; i++) {
    arrH[i].dataset['index'] = i;
    arrH[i].onclick = function (e) {
        console.log(e.currentTarget.dataset.index); //0,1.2.3.4
    }
}

for (var i = 0; i < 10; i++) {
    function doPuts(i) {
        setTimeout(function () {
            console.log(i);   //0.1.2.3.4.5.6.7.8.9
        }, 1000);
    }                        //循环中的doPuts方法在其循环内部调用时，每一次调用都会生成一个作用域空间，在此作用域的变量是独立的
    doPuts(i);               // 此种在function内部生成独立作用域空间的行为为闭包
}                            // ** js中能把函数（function）当作参数进行传递是生成闭包的前提条件


//在demo中有一个返回值为一个function对象
function demo(val) {
    var k = 18;
    if (val) {    // 款盘传递的参数是否存在 
        k = val;
    }
    function demoA(val) {   //定义一个function
        return k;
    }
    return demoA;   //函数返回值为自定义function demoA
}
console.log(demo()())  //demo（）（）获取的demoA的值
console.log(demo(21)())   //21
console.log(demo(21)(19));   //21

(function (val) {           //自调用函数
    // console.log()
    if (val) {
        val++
    }
    function k() {
        console.log(val++)  //19
        console.log(val)    //20
    }
    return k
})(18)()


var arrNums = [0, 1, 2, 4, 5, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 12, 8, 6, 17, 18]
var arrEven = []
for (var i = 0; i < arrNums.length; i++) {
    if (arrNums[i] % 2 == 0) {
        arrEven.push(arrNums[i]);
    }
}
console.log(arrEven);

var arrNew = [];
for (var i = 0; i < arrNums.length; i++) {//数组去重
    //indexof 获取指定的值在数值中的索引，如果不存在返回 -1
    if (arrNew.indexOf(arrNums[i]) < 0) {
        arrNew.push(arrNums[i])
    }
}
console.log(arrNew.sort())