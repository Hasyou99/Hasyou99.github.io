//根据属性名字进行选择
var div = document.querySelector('[data-title]')
//获取dataset的值
console.log(div.dataset['title'])
console.log(div.dataset.title)


//执行顺序  down->press->up
//键盘抬起事件
document.body.onkeyup = function (e){
    console.log('keyup')
    // console.log(e)
    console.log(e.keycode);  //要求必须记住keycode的为13时，enter回车键
    if(e.key.toUpperCase() = 'M' && e.ctrlKey){
        alert('输入内容正确')
    }
    else{
        alert('请重新输入')
    }

    // e.key  //按下的键值
    // e.altKey  //true/false 是否按下alt键
    // e.ctrlKey     //是否按下crtl键
    // e.shiftKey   //是否按下shift键
    // e.keycode   //按键对应的编码
}

//按键按下事件
document.body.onkeydown = function (e){
    console.log('keydown')
    console.log(e)
}
//键盘点击事件，类似于onclick
document.body.onkeypress = function (e){
    console.log('keypress')
    console.log(e)
}