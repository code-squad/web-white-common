/*
var parent = document.querySelector("ul");
var son = document.querySelector("ul li:nth-child(1)");
console.log(son);
parent.removeChild(son);
*/
var textnode = document.createTextNode("water");
var item = document.querySelector(".list1").childNodes[1];
console.log(item);
item.replaceChild(textnode, item.childNodes[0]);
