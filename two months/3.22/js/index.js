var strDiv = "<div style='width:200px;height:100px;background-color:red'></div>" 
document.body.innerHTML = strDiv;

// innerHTML 把html解析之后再页面显示
// innerText 直接把html代码以文本的形式显现出来

var strBlue = "<div style='width:200px;height:100px;background-color:#00f'></div>" 
document.body.innerHTML += strBlue;

var rect = document.createElement('div');
console.log(rect);
rect.style.backgroundColor = '#0f0';
rect.style.width = '200px'
rect.style.height = '100px'
document.body.appendChild(rect);  //把div标签加入html中

var circle = document.createElement('div');
circle.style.backgroundColor = 'orange';
circle.style.width = '200px'
circle.style.height = '200px'
circle.style.borderRadius = '50%'
document.body.appendChild(circle);

