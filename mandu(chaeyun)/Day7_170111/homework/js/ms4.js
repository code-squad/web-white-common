// 바나나와 오렌지 사이에 새로운 과일 추가.
/*
  1. 부모 노드를 획득한다.
  2. <li> elelment 를 만든다. newItem 에 저장한다.
  3. textnode 를 생성해서 newItem 에 추가(appendChild)한다.
  4. insertBefore() 를 사용해 대상 앞에 newItem을 추가한다.
*/

var list = document.querySelector("ul");
var newItem = document.createElement("LI");
var textnode = document.createTextNode("pineapple");
newItem.appendChild(textnode);
list.insertBefore(newItem, document.querySelector("ul li:nth-child(3)"))
