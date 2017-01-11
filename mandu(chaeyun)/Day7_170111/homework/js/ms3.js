// stawberry 아래에 새로운 과일 추가 , 삭제

/*
  1. 부모노드를 획득한다.
  2. 지울 대상 노드를 획득한다.
  3. 생성 또는 지운다.
*/

var addedNode = document.createElement("LI");
var textnode = document.createTextNode("blueberry");
addedNode.appendChild(textnode);
document.querySelector("ul").appendChild(addedNode);

var parent = document.querySelector("ul");
var removedNode = document.querySelector("ul li:nth-last-child(1)")
parent.removeChild(removedNode);
