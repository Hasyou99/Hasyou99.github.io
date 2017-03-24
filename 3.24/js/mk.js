function clicked(event){
    console.group('图片点击')
    console.log('x:'+event.offsetX);
    console.log('y:'+event.offsetY);
    var x = event.offsetX; // 相对当前对象的左上角进行计算
    var y = event.offsetY;
    if(147<x&& x<258&&134<y&& y<203){
        alert('当前点击的是鼻子')
    }
    console.groupEnd('图片点击');
}