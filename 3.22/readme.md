### js中DOM操作元素

> 1.操作DOM元素创建html标签

> 2.创建一个方法：是标签元素放到指定元素的后面

```javascript
    function insertAfter(newChild,refChild){
    var parentContainer = refChild.parentNode;
    var next = refChild.nextElementSibling  //获取参考物的下一个节点
    if(next != null){
        // 在下一个节点的上一个位置加入
        parentContainer.insertBefore(newChild,next);
    }
    else{
        parentContainer.appendChild(newChild); //如果当前节点是结尾节点
    }
```
> 3.动态创建标签元素

#### js的加载顺序

<!--
    html文档的加载顺序概念：
    从上倒下加载
       如果我在head中引入js文件直接读取document。body，返回值为null
    通过src属性引入js文件，相当于把js文件中的代码复制在指定位置
    在写代码的时候建议把js文件放在body节点的最后面
-->
