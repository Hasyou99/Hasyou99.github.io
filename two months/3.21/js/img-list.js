// 图片数组
var arrImgs = ["http://mvimg1.meitudata.com/58d08ad447c907282.jpg!thumb320", "http://mvimg1.meitudata.com/58ce02e1999dd641.jpg!thumb320", "http://mvimg10.meitudata.com/58cf5269a693e4145.jpg!thumb320", "http://mvimg2.meitudata.com/58cebad824b0a9521.jpg!thumb320", "http://mvimg2.meitudata.com/58cebda41d7e22400.jpg!thumb320", "http://mvimg2.meitudata.com/58cf35b0b85044152.jpg!thumb320", "http://mvimg2.meitudata.com/58ce6d62350968020.jpg!thumb320", "http://mvimg1.meitudata.com/58ce379308fa59892.jpg!thumb320", "http://mvimg10.meitudata.com/58ce0b7f7c9f7997.jpg!thumb320", "http://mvimg10.meitudata.com/58d08d64e1aed1829.jpg!thumb320", "http://mvimg1.meitudata.com/58cf3c18904ca820.jpg!thumb320", "http://mvimg10.meitudata.com/58ce30e5c6a116169.jpg!thumb320", "http://mvimg2.meitudata.com/58cf840a4b0874330.jpg!thumb320", "http://mvimg11.meitudata.com/58cfbceb1b3f86328.jpg!thumb320", "http://mvimg1.meitudata.com/58ce0b8619dd16174.jpg!thumb320", "http://mvimg11.meitudata.com/58d0b472b93b18207.jpg!thumb320", "http://mvimg11.meitudata.com/58cf1407a10c71486.jpg!thumb320", "http://mvimg1.meitudata.com/58cf692e90864590.jpg!thumb320", "http://mvimg11.meitudata.com/58ce3da8b046c7428.jpg!thumb320", "http://mvimg11.meitudata.com/58cebe7bea0397889.jpg!thumb320", "http://mvimg10.meitudata.com/58cfff83137016536.jpg!thumb320", "http://mvimg2.meitudata.com/58d09a1e2c4357790.jpg!thumb320", "http://mvimg11.meitudata.com/58cfcd4a224ea5259.jpg!thumb320", "http://mvimg2.meitudata.com/58cfd5a1881392391.jpg!thumb320"]

var imgList = document.getElementsByClassName('img-list');
var strHtml = '';

for(var i= 0;i<arrImgs.length;i++){
    strHtml += '<a href= "'+arrImgs[i]+'" target="_blank"><img src= "'+ arrImgs[i]+'"></a>';  //字符串拼接
}
imgList[0].innerHTML = strHtml;


// forEach 循环数组中的每一项；
//  回调函数接受三个参数：
    // 参数1：每一项的内容
    // 参数2：索引（数组下标）
    // 参数3：数组对象本身
var arrNum = [5,15,25,61,18,24,12,15,12,28];
arrNum.sort();
var arrSum =[];
arrNum.forEach(function(it,i,array) {
    console.group(i);
    console.log(it);
    console.log(i);
    console.log(array);
    console.groupEnd(i);
    //    console.log(arrSum.push(arr));
 },this);


// 数组的join方法把数组中的每一项拼接成一个字符串，使用给定的连接符进行连接
var arr = ['Tom','Jreey','蜡笔小新']
console.log(arr.join('-'));