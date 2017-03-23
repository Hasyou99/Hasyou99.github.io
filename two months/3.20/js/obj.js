var person ={};
person.name = 'Tom'
person['age'] = 18;//赋值给一个age，通过[]方式
person.pets = []; //宠物的集合

// 对象中嵌套数组，数组中包含对象
var petCat = {}  //宠物猫
petCat.name = 'kitty'
petCat.fav = '鱼'
petCat.type = 'cat'

var petDog ={}
petDog.name = '小白'
petDog.fav = '棉花糖'
petDog.type = 'dog'

person.pets.push(petCat);
person.pets.push(petDog);
// 以树形结构的方式输出指定内容
console.dir(person);


// IDE 集成开发环境

//  object对象中的属性值可以为任意数据（对象，数组）
//属性名子设置时可以使用类似数组下标的方式
//object对象是一个（key- value）存在


// 通过for in方法获得对象的键（key）
for(var k in person){
    console.log(k);
    console.log(person[k]);
}

//通过object。keys（对象）获取key数组
console.log(Object.keys(person));