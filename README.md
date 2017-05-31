####  Ajax请求

刚开始结束Ajax请求的时候，那真的是迷迷糊糊，昏天暗地，通过学习的深入和翻阅各种资料、求助度娘，总结一下Ajax请求，与大家分享一下，希望能给学习Ajax的同学一些帮助，废话不多手，直接开始~~~

一、Ajax请求的原理及与传统的web请求的比较

1.原理:在Ajax请求中，html页面的中操作将通过Ajax引擎与服务器端进行通讯，然后将返回的结果提交到客户端页面的Ajax引擎，再由Ajax引擎来决定将服务器端返回数据插入到页面的指定位置。从而实现无需刷新页面的http请求。
看图：


2.Ajax请求的优点

     a.当然最大的优点就是，无需刷新就可更新页面
     b.可以把原先服务器端负担的工作的转移客户端，利用客户端的闲置资源进行处理，减轻服务器和带宽的负担，节约空间和成本
     c.Ajax没有平台限制。Ajax把服务器由原先的传送内容转变为传输数据，而数据格式可以为纯文本和XML格式，这两种格式没有平台限制。
     d.可以调用Xml等外部数据，进一步促进页面的显示和数据的分离

3.Ajax使用的技术

     a.XMLHttpRequest对象
     b.XML
     c.JavaScript
     d.Css
     e.DOM

4.Ajax请求时性能的优化

     a.尽量使用局部变量，不要使用全局变量
     b.优化for循环
     c.尽量少使用eval，每次使用eval都会浪费大量时间
     d.将DOM节点附加到文档上
     e.尽量减少使用点“.”号操作符的使用



二、不同方式的Ajax请求

1.原生js的ajax请求
     a.初始化XMLHttpRequest对象
        /* IE6以上的浏览器*/
         var http_request = new ActiveXObject("Msxml2.XMLHTTP")
         或者：
         var http_request = new ActiveXObject("Microsoft.XMLHTTP")

        /* 非IE浏览器（firefox，Opera，Mozilla，Safari）*/
        var http_request = new XMLHttpRequest()

        考虑到浏览器的兼容性，需要创建一个跨浏览器的XMLHttpRequest对象，如下：
```
        var http_request;
        if (window.XMLHttpRequest) { //兼容非IE浏览器
            http_request = new XMLHttpRequest()
        } else if (window.ActiveXObject) { //兼容IE6以上的浏览器
            try {
                http_request = new ActiveXObject("Msxml2.XMLHTTP")
            } catch (e) {
                try {
                    http_request = new ActiveXObject("Microsoft.XMLHTTP")
                } catch (e) {}
            }
        }
```
      b.XMLHttpRequest对象的常用方法

         ----创建新请求的方法
            open()方法用于设置进行异步请求目标的URL，请求方法以及其他参数信息
            open("methods","URL","asyncFlag")
                methods:用于请求的指定类型，一般为POST或者GET
                URL：用于指定的请求地址，可以用绝对地址和相对地址，并且可以传递查询字符串
                asyncFlag:可选参数，用于指定请求方式，异步请求为true，同步请求为false，默认为true

         ----向服务器发送请求的方法
            send()方法用于向服务器发送请求。如果请求声明为异步，该方法立即返回，否则将会等到接收到响应为止 
            send(content)
                content:用于指定发送的数据，可以是DOM对象的实例，字符串等，如果没用参数，需要传递设置为null
                举个例子：
                    需要向服务器发送一个没有参数的请求，如下：
                    http_request.send(null)

         ----设置请求的HTTP头的方法
            setRequestHeader("header","value")
                header:用于指定的HTTP头
                value：用于指定的HTTP头的设置值
                注意：setRequestHeader()方法调用需要在open()方法之后
                例如：
                    http_request.setRequestHeader("Content-Type","application/x-www-form-urlencoded")

         ----停止、放弃当前异步请求的方法
            abort()
            例子：停止当前的异步请求http_request.abort()

        c.XMLHttpRequest对象的常用属性

             1.onreadystatechange:用于指定状态改变时所触发的事件处理器属性，在Ajax中，每个状态改变时都会触发
                这个事件处理器，通常会调用一个Javascript函数
                http_request.onreadystatechange = function(){}

             2.readystate:请求状态的属性
                readystate属性的属性值的意义：
                    0：未初始化      1：正在加载    2：已加载     3：交互中     4：完成
                    在实际应用中，该属性的经常用于判断请求状态，当请求状态为4时，在判断请求是否成功，如果成功，就开始处理返回结果
             
             3.responseText:获取服务器的字符串响应的属性
                接收响应：var text = http_request.responseText

             4.responseXML：获取服务器的XML响应的属性
                接收响应：var xmldoc = http_request.responseXML

             5.status：返回服务器的HTTP状态码的属性
                格式：http_request.status
                状态码：
                    100：继续发送请求       200：请求成功
                    202：请求被接受，但尚未成功    400：错误的请求
                    404：文件未找到         408：请求超时
                    500：内部服务器错误      501：服务器不支持当前请求所需要的某个功能  

                注意：status属性只能在send()方法返回成功时，才能调用  
                    当请求完成之后：
```
                    if (http_request.readystate === 4) {
                        if (http_request.status === 200) {
                            alert("请求成功")
                        } else {
                            alert("请求失败")
                        }
                    }

```