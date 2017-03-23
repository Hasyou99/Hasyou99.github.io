
// var editorContainer = document.createElement('div');
// editorContainer.className = 'editor';
// document.body.appendChild(editorContainer);

// var inputContainer = document.createElement('input');
// inputContainer.type = 'text';
// inputContainer.id = 'txt';
// var btn =  document.createElement('button');
// btn.type = 'button';
// btn.innerText = '按钮';
// btn.onclick = function(){
//      var valueInput = inputContainer.value.trim(); //把字符串开始和结束的空格内容进行删除
     
//      if(valueInput ==''){
//         alert('不能输入空字符串！'); 
//      }
//      else{
//          var h5 = document.createElement('h5');
//          h5.innerText = valueInput;
//          con.appendChild(h5);
//      }
//  }
// editorContainer.appendChild(inputContainer);
// editorContainer.appendChild(btn);

// var con = document.createElement('div');
// con.className = 'container';
// document.body.appendChild(con);


var divEditor = document.createElement('div');
var divCon = document.createElement('div');
divEditor.id = 'editor';
divCon.className = 'container';
document.body.appendChild(divEditor);   //把div插入到页面中；
document.body.appendChild(divCon);

var input = document.createElement('textarea');
input.cols = '100';
input.rows = '20';
var btn = document.createElement('button');
btn.innerText = '确定';
var btnHtml = document.createElement('button');
btnHtml.innerText = '按钮';
btnHtml.onclick = function(){
    var valueInput = input.value.trim();
    if(valueInput == ''){
        alert('请输入内容');
    }
    else{
        var h5 = document.createElement('h5');
        h5.innerHTML = valueInput;
        divCon.appendChild(h5);
    }
}
btn.onclick = function(){
    var valueInput = input.value.trim();
    if(valueInput == ''){
        alert('请输入内容');
    }
    else{
        var h5 = document.createElement('h5');
        h5.innerText = valueInput;
        divCon.appendChild(h5);
    }
}
divEditor.appendChild(input);    //把输入框和按钮加入div_1中
divEditor.appendChild(btn);
divEditor.appendChild(btnHtml);
