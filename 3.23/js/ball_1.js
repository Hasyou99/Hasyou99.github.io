// 定义一个球体
var BL = document.createElement('div');
BL.style.backgroundColor = '#f00';   //颜色
BL.style.width = '120px'   //kuan
BL.style.height = '120px'   //高
BL.style.borderRadius = '50%';  //圆角
BL.style.position ='absolute'  //定位方式
BL.style.left = '0';   
BL.style.top = '0';
document.body.appendChild(BL);   //加入页面


var directX1 = 1;
var directY1 = 1;
function move1(){
    var w = document.body.clientWidth;
    var h = document.body.clientHeight;
    
    var cellWidth = BL.offsetWidth;
    var cellHeight = BL.offsetHeight;
    if(BL.offsetLeft + cellWidth >= w){
        // divBL.style.left = divBL.offsetLeft - 1 +'px' ;
        directX1 = -1;   //移动到屏幕到右边时，反向
       
    }
    if(BL.offsetLeft<=0 ){
        directX1 = 1;   // 移动到屏幕到左边时，正向
        
    }
    if(BL.offsetTop + cellHeight >=h){
        directY1 = -1;
    }
    if(BL.offsetTop<=0){
        directY1 = 1;   // 移动到屏幕到shang边时，正向
    }
    // else{
    //  divBL.style.left = divBL.offsetLeft + 1 +'px' ;
    // }
    BL.style.left = BL.offsetLeft + 4* directX1 +'px' ;
    BL.style.top = BL.offsetTop + 3* directY1 +'px' ;
    //每秒钟执行60次
    requestAnimationFrame(move1);       //使用js动画帧，调用自身移动的方法
}
move1();