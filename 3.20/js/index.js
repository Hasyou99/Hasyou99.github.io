var div = document.querySelector("#main");//通过id查找页面中的标签元素
var strHtml = '';//定义一个字符串

for(var i=0; i<5;i++){
    console.group('我是第'+i+'次循环');//可以把输出内容做一个分组处理，增加可读性。和groupEnd是一组；内部参数要一致；
    console.log(i);
    strHtml += '<h1>我是第'+i+'个h1</h1>';
    console.log(strHtml);
    console.groupEnd('我是第'+i+'次循环');

    console.count('for循环执行中...')
}
// 设置div的显示内容为字符串拼接结果
// innerHtml代表元素内部的html代码
div.innerHTML = strHtml;

// 浏览器js调试快捷键
/*  
    浏览器断点添加和删除方法：点击行号即可
    f8:跳过断点继续执行
    f10：单步执行
    f11：进入方法体内部
*/
/*
console.clear()  //清空终端输出
console.dir()  //输出详细的信息
console.info('xxx') //输出消息内容（带有消息图标）
console.error('xx')  //输出错误内容（有错误图标）
console.count('计数对象') //输出计数值
*/