var div = document.createElement('div')
document.body.appendChild(div);
var h5 = document.createElement('h5')
div.appendChild("h5");

console.log(h5.parentNode) //获取制定标签的父节点
console.log(div.lastChild) //获取制定标签的最后一个子节点
console.log(div.firstChild) //获取制定标签的第一个子节点


/**
 * 在指定标签的后面加入一个标签 
 * @param {1} newChild  新加入的标签
 * @param {2} refChild  需要加入的标签位置（参考物）
 */
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
}


console.dir(div.childNodes);  //输出div的所有子节点（标签） nodelist
console.log(div.children);    // 

div.removeChild(span)    //删除子节点
div.replaceChild(span,news)    //替换标签

