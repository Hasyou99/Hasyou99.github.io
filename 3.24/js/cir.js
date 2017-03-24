var body = document.body;
body.onclick = function (event){
    var circle = document.createElement('div');
    circle.style.width = '100px';
    circle.style.height = '100px';
    circle.style.borderRadius = '50%';
    circle.style.borderWidth = '2px';
    circle.style.borderColor = 'red';
    circle.style.borderStyle = 'solid';
    circle.style.position = 'absolute';
    circle.style.left = event.pageX - 50 + 'px';
    circle.style.top = event.pageY - 50 +'px';
    body.appendChild(circle);
 }

