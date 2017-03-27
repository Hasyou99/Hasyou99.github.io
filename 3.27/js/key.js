
var val = document.querySelector('input');
var p = document.getElementById('show')
var h5 = document.getElementById('lbl')



function keyupHandle(e){
     p.innerHTML = val.value;

    if(e.keyCode ==13){
        h5.innerText = val.value;
    }
}