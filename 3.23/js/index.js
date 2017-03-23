var main = document.getElementsByClassName('main')[0];

// 以下属性为只读，不可修改
console.log(main.clientHeight);   //内容区域  包含padding
console.log(main.offsetHeight);   //内容区域+边框
console.log(main.clientTop);   // 距离顶部的位移（边框）  偏移量  y轴方向
console.log(main.offsetTop);    //距离顶部的距离（margin的值）
/**
 * 以屏幕左上角为参考点，坐标（0，0）坐标中，参数一表示x轴，参数二表示y轴
 */

console.log(main.clientWidth);   //300+5+5 =310
console.log(main.offsetWidth);  //300+5+5+8+8=326
console.log(main.clientLeft);   //8
console.log(main.offsetLeft);    //(屏幕尺寸-326)/2

console.log(document.body.clientHeight);
console.log(document.body.clientWidth);


var divBL = document.createElement('div');
divBL.style.backgroundColor = '#f00';
divBL.style.width = '300px'
divBL.style.height = '300px'
divBL.style.borderRadius = '50%';
divBL.style.position ='absolute'
divBL.style.left = '0';
divBL.style.bottom = '0'
document.body.appendChild(divBL);

// divBL.onclick = function(){
//     divBL.style.left = divBL.offsetLeft + 1 +'px'  //offsetLeft 的值是一个number
// }
// var move = setInterval(function(){
//     divBL.style.left = divBL.offsetLeft + 1 +'px' 
// },1)

// clearInterval(move);

// requestAnimationFrame   h5新特性

var directX = 1;
var directY = 1;
function move(){
    var w = document.body.offsetWidth;
    var h = document.body.offsetHeight;
    
    var cellWidth = divBL.offsetWidth;
    var cellHeight = divBL.offsetHeight;
    if(divBL.offsetLeft + cellWidth >= w || divBL.offsetTop<=0){
        // divBL.style.left = divBL.offsetLeft - 1 +'px' ;
        directX = -1;   //移动到屏幕到右边时，反向
        directY = 1;
    }
    if(divBL.offsetLeft<=0 || divBL.offsetTop + cellHeight >=h){
        directX = 1;   // 移动到屏幕到左边时，正向
        directY = -1;
    }
    // if(divBL.offsetTop + cellHeight >=h){
    //     directY = -1;
    // }
    // if(divBL.offsetTop<=0){
    //     directY = 1;   // 移动到屏幕到shang边时，正向
    // }
    // else{
    //  divBL.style.left = divBL.offsetLeft + 1 +'px' ;
    // }
    divBL.style.left = divBL.offsetLeft + (w-300)/1000* directX +'px' ;
    divBL.style.top = divBL.offsetTop + (h-200)/1000* directY +'px' ;
    //每秒钟执行60次
    requestAnimationFrame(move);       //使用js动画帧，调用自身移动的方法
}
move();


/**
 * var a ='2'
 * b = 2
 * 把a字符串转换成数字的方法
 * 1.a*1
 * 2.Number(2)
 */
