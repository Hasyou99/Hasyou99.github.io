var d = document;
// 获取文档的标题
console.log(d.title);

// d.body；获取body节点，返回一个对象
console.log(typeof d.body);

// innerHTML表示元素内部的html内容
console.log(typeof d.body.innerHTML);

// innerText表示元素内部的文本内容，不包含html标签名字
console.log(d.body.innerText);

// 替换body内部的html内容
// d.body.innerHTML = "<h1>hello world!</h1>"

console.log(d.head)//head节点

console.log(d.scripts)  //所有的js引用，返回的是一个集合（collection非数组）

console.log(d.styleSheets) //获取页面中使用的样式，包含link，style

console.clear(); //清空上面控制台的所有输出


console.log(d.getElementById('txt'));  //根据id获取一个标签元素，找不到返回null

//根据标签名查找元素，获取多个元素，返回的是一个集合
console.log(d.getElementsByTagName('p'));  

// 根据class类名获取多个元素，返回一个集合
console.log(d.getElementsByClassName('list')); 

// 根据name值获取多个元素，返回一个集合（通常用yu表单中）
console.log(d.getElementsByName('title')); 

console.log('------querySelector-------');
// 根据id获取一个标签
console.log(d.querySelector('#txt')); 

// 根据class和标签名字结合，返回一个集合
console.log(d.querySelectorAll('.list li')); 

// 获取ul中的第三个li
console.log(d.querySelectorAll('.list li')[2]);

var lists = d.querySelectorAll('.list li');
for(var i=0;i<lists.length;i++){
    var list= lists[i];  //临时变量保存循环到的每一项li
    console.log(list.innerText);
}

// 获取页面文档中包含制指定属性的节点
var tagHasNameProp = d.querySelectorAll('[name]');
// 指定属性值，精确找到需要的元素
// var tagHasNameProp = d.querySelectorAll('[name="viewport"]');
console.log(tagHasNameProp);