
var arrZiMu = [];
var h = document.getElementById('h');
var span = document.querySelectorAll('span');
var x = 0;
var y = 0;
span[0].innerHTML = x;
span[1].innerHTML = y;


for (var i = 65; i < 91; i++) {
    arrZiMu.push(String.fromCharCode(i));
}

var index = Math.floor(Math.random() * 26);
h.innerHTML = arrZiMu[index];  //获取h中首个字母

window.onkeydown = function keyupHandle(e) {

    if (e.keyCode == index + 65) {
        index = Math.floor(Math.random() * 26)
        h.innerHTML = arrZiMu[index];
        h.className = 'bounceIn';
        x++;
        span[0].innerHTML = x;
    }
    else {
        y++;
        span[1].innerHTML = y;
        h.className = 'shake';
    }
    var z = (x / (x + y)) * 100;
    span[2].innerHTML = z.toFixed(1);
}