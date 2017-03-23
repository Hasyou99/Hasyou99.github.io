//定义标题数组
var arrTitle = ["H5推广：你该知道的一些事儿", "线条之美，玩转SVG线条动画", "“等一下，我碰！”——常见的2D碰撞检测", "使用 Snap.svg 制作动画", "移动端H5页面注意事项", "移动端h5开发相关内容总结（四）", "聊聊 SVG 基本形状转换那些事", "webgl世界 matrix入门", "SVG 实现复杂线条动画", "SVG 线条动画入门", "图片资源 Base64 化在 H5 页面里有用武之地吗", "三看 SVG Web 动效", "HTML也可以静态编译？", "聊聊响应式图片", "用webgl打造一款简单第一人称射击游戏", "H5直播起航", "欢迎来到HTML5.2时代！", "纯 HTML+CSS+JavaScript 编写的计算器应用", "Web Components 是个什么样的东西", "前端HTML5几种存储方式的总结"]
// 定义链接数组
var arrLinks = ["http://web.jobbole.com/90701/", "http://web.jobbole.com/90587/", "http://web.jobbole.com/90472/", "http://web.jobbole.com/90456/", "http://web.jobbole.com/90404/", "http://web.jobbole.com/90234/", "http://web.jobbole.com/90026/", "http://web.jobbole.com/89983/", "http://web.jobbole.com/89729/", "http://web.jobbole.com/89728/", "http://web.jobbole.com/89449/", "http://web.jobbole.com/89227/", "http://web.jobbole.com/89210/", "http://web.jobbole.com/88846/", "http://web.jobbole.com/88708/", "http://web.jobbole.com/88543/", "http://web.jobbole.com/88302/", "http://web.jobbole.com/88143/", "href:http://web.jobbole.com/87777/", "href:http://web.jobbole.com/87766/"]


var news = [];
for(var i=arrLinks.length-1;i>=0;i--){
   var obj = {};
   obj.title = arrTitle[i];
   obj.link = arrLinks[i];
   for(var j=i;j>=0;j--){
       news[j] = obj;
   }
}
console.log(news);

var strText ='';
var div = document.getElementsByClassName('title');
for(var x=0;x<news.length;x++){
    strText += '{'+'title:'+'‘' + news[x].title +'’' +',' +'link:'+'‘'+ news[x].link +'’'+'}'+','+'<br>';
}
div[0].innerHTML = 'var news = ['+'<br>'+ strText +']';