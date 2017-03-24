function overHandle(e,tag){
    console.group('鼠标移上事件')
    console.log(e);
    console.log(tag);
    tag.style.backgroundColor = 'rgb(255,120,0)';
    console.groupEnd('鼠标移上事件')
}

function outHandle(e,tag){
    console.group('鼠标移出事件')
    console.log(e);
    console.log(tag);
    tag.style.backgroundColor = '#00f';
    console.groupEnd('鼠标移出事件');
}
//鼠标按下
var isDown = false;
var downX = 0;
var downY =0;
function downHandle(e,tag){
    isDown = true;
    downX = e.offsetX;
    downY = e.offsetY;
}
//鼠标抬起
function upHandle(e,tag){
    isDown = false;
}
// 鼠标移动
function moveHandle(e,tag){
    // console.log('offsetX:'+e.offsetX);
    // console.log('pageX:'+e.pageX);
    // console.log('clientX:'+e.clientX);
    if(isDown == true){
     
    // tag.style.left = (e.pageX - e.offsetX) + 'px';
    tag.style.left = e.pageX - downX +'px';
    tag.style.top = e.pageY - downY +'px';
    }
}

