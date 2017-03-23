

for(var i=0;i<10;i++){
    var circle = document.createElement('div'); 
    //    0=<Math.random()<1
    var randomColor = Math.floor(Math.random()*255);   //随机颜色
    var randomSize = Math.random()*300;        //随ji宽度
    var randomTop = Math.random()*300;
    var randomLeft = Math.random()*500;
    circle.style.backgroundColor = 'rgb('+randomColor+','+randomColor+',125)';
    circle.style.width = randomSize+'px'
    circle.style.height = randomSize+'px'
    circle.style.borderRadius = '50%'
    circle.style.position = 'absolute'
    circle.style.left = randomLeft+'px'
    circle.style.top = randomTop+'px'
    circle.innerText = i+1;   //为各个形状标号
    document.body.appendChild(circle);
}