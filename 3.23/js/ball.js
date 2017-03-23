var w = document.body.clientWidth;
var h = document.body.clientHeight;  //定义在全局变量，方便window变化时，监听宽高的变化

// 定义多个球体

var arrBalls = [];
for (var i = 0; i < 50; i++) {
    var divBL = document.createElement('div');
    divBL.style.backgroundColor = 'rgba('+Math.floor(Math.random()*255)+','+Math.floor(Math.random()*180)+',0,0.8)';   //颜色
    divBL.style.width = Math.random()*100+'px'   //kuan
    // divBL.style.minWidth = '30px'
    // divBL.style.minWidth = divBL.style.minHeight;
    divBL.style.height = divBL.style.width   //高
    divBL.style.borderRadius = '50%';  //圆角
    divBL.style.position = 'absolute'  //定位方式
    divBL.style.left = Math.random()*(w - Math.random()*100) + 'px';
    divBL.style.top = Math.random()*h +'px';
    divBL.dataset['directX'] = 1;
    divBL.dataset['directY'] = 1;
    document.body.appendChild(divBL);   //加入页面
    arrBalls.push(divBL);
}

// var directX = 1;
// var directY = 1;

function move() {

    for (var j = 0; j < arrBalls.length; j++) {
        var divBL = arrBalls[j];
        if (divBL.offsetLeft + divBL.offsetWidth >= w) {
            // divBL.style.left = divBL.offsetLeft - 1 +'px' ;
            divBL.dataset['directX'] = -1;  //移动到屏幕到右边时，反向

        }
        if (divBL.offsetLeft <= 0) {
            divBL.dataset['directX'] = 1;   // 移动到屏幕到左边时，正向

        }
        if (divBL.offsetTop + divBL.offsetHeight >= h) {
           divBL.dataset['directY'] = -1;;
        }
        if (divBL.offsetTop <= 0) {
            divBL.dataset['directY'] = 1;   // 移动到屏幕到shang边时，正向
        }
        divBL.style.left = divBL.offsetLeft + 4 * divBL.dataset['directX'] + 'px';
        divBL.style.top = divBL.offsetTop +  3* divBL.dataset['directY'] + 'px';
    }

    //每秒钟执行60次
    requestAnimationFrame(move);       //使用js动画帧，调用自身移动的方法
}
move();


window.onresize = function () {            //改变窗口大小之后，重置w和h的值
    w = document.body.clientWidth;
    h = document.body.clientHeight;
}