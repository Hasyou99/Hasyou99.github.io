/**
 * 需要实现效果
 * 1.点击之后创建一个h5标签放置在container的容器内
 * 2.h5标签中文本内容为我输入框的内容
 * 3.当输入文字内容为空的时候提示用户不能输入空字符串
 */

//    var div = document.getElementsByClassName('container');
// function btnClick(){
//     var valueInput = document.getElementById('txt').value.trim(); //把字符串开始和结束的空格内容进行删除
//     if(valueInput ==''){
//        alert('不能输入空字符串！'); 
//     }
//     else{
//         var h5 = document.createElement('h5');
//         h5.innerText = valueInput;
//         div.appendChild(h5);
//     }
// }

function btnClick(){
    var inputValue = document.querySelectorAll('#txt')[0].value.trim();
    
    if(inputValue){
       var contai=document.querySelectorAll('.container')[0];
       var h5=document.createElement('h5');
       h5.innerText=inputValue;
       contai.appendChild(h5);
    }
    else{
        alert('请输入内容')
    }
}