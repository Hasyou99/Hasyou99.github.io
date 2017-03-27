
var dif = document.getElementById('dif');
var divContainer = [];
var time = document.createElement('div');
time.innerText = 5;
var rect = document.createElement('div');

var int = 30;
var time1 = setInterval(function () {
    if (int >= 0) {
        rect.innerHTML = int;
        int--;
    }
    if (int == 0) {

        if (confirm('Game Over! Do you want to come again?')) {
            int = 30;
        }
        else {
            int = 0;
        }
    }
}, 1000)

dif.onclick = function (e) {
    var x = e.offsetX;
    var y = e.offsetY;
    //创建div及其属性
    var div = document.createElement('div');
    div.style.borderRadius = '50%';
    div.style.borderWidth = '2px';
    div.style.borderColor = 'red';
    div.style.borderStyle = 'solid';
    div.style.position = 'absolute';
    div.style.left = x - 50 + 'px';
    div.style.top = y - 50 + 'px';


    //判断点击区域
    function clickTime() {
        if (1292 < x && x < 1405 && 757 < y && y < 838) {
            div.style.width = '120px'
            div.style.height = '90px';
            div.style.left = '1300px';
            div.style.top = '759px';
            document.body.appendChild(div);
            divContainer.push(div);  //将创建的div放入数组中
        }
        if (1109 < x && x < 1254 && 170 < y && y < 276) {
            div.style.width = '160px'
            div.style.height = '120px';
            div.style.left = '1115px';
            div.style.top = '175px';
            document.body.appendChild(div);
            divContainer.push(div);  //将创建的div放入数组中
        }
        if (1491 < x && x < 1573 && 874 < y && y < 941) {
            div.style.width = '90px'
            div.style.height = '80px';
            div.style.left = '1495px';
            div.style.top = '874px';
            document.body.appendChild(div);
            divContainer.push(div);  //将创建的div放入数组中
        }
        if (1792 < x && x < 1885 && 841 < y && y < 902) {
            div.style.width = '100px'
            div.style.height = '80px';
            div.style.left = '1790px';
            div.style.top = '840px';
            document.body.appendChild(div);
            divContainer.push(div);  //将创建的div放入数组中
        }
        if (1162 < x && x < 1260 && 861 < y && y < 934) {
            div.style.width = '110px'
            div.style.height = '80px';
            div.style.left = '1160px';
            div.style.top = '861px';
            document.body.appendChild(div);
            divContainer.push(div);  //将创建的div放入数组中
        }
    }
    clickTime(this);

    time.innerText = 5 - divContainer.length;
    if (time.innerText == 0) {
        clearInterval(time1);

        if (confirm('Good Job!')) {
            time1();
        }
        else { }
    }
}

//创建放置时间的div
rect.style.width = '140px'
rect.style.height = '90px';
rect.style.position = 'absolute';
rect.style.left = '550px';
rect.style.top = '1070px';
document.body.appendChild(rect);
rect.style.fontSize = '55px'
rect.style.textAlign = 'center'
rect.style.lineHeight = '90px'

//创建放置次数的容器
time.style.width = '140px'
time.style.height = '90px';
time.style.position = 'absolute';
time.style.left = '1130px';
time.style.top = '1070px';
document.body.appendChild(time);
time.style.fontSize = '55px'
time.style.textAlign = 'center'
time.style.lineHeight = '90px'