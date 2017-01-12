/* 2017.01.11.화요일 */

/*
3. stawberry 아래에 새로운 과일 추가 , 삭제

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


/*
4. 바나나와 오렌지 사이에 새로운 과일 추가.

  1. 부모 노드를 획득한다.
  2. li elelment 를 만든다. newItem 에 저장한다.
  3. textnode 를 생성해서 newItem 에 추가(appendChild)한다.
  4. insertBefore() 를 사용해 대상 앞에 newItem을 추가한다.
*/

var list = document.querySelector("ul");
var newItem = document.createElement("LI");
var textnode = document.createTextNode("pineapple");
newItem.appendChild(textnode);
list.insertBefore(newItem, document.querySelector("ul li:nth-child(3)"))

/*
5. apple을 grape 와 stawberry 사이에 옮기기.
  1. apple 노드를 클론해서 cloneNode에 저장한다.
  2. copyNode 를 insertBefore() 를 사용해서 stawberry 앞에 추가한다.
  3. 첫 번째 apple 노드를 removeChild()로 삭제한다.
*/

var parent = document.querySelector("ul");
var target = document.querySelector("ul li:first-Child")
var cloneNode = target.cloneNode(true);
parent.insertBefore(cloneNode, document.querySelector("ul li:nth-child(5)"));
parent.removeChild(target);

/*
6. class 가 'red'인 노드만 삭제합니다.
  1. 부모 노드를 list 에 저장.
  2. 지울 노드를 target 에 저장.
  3. 해당 노드를 삭제한다.
  4. 한번 더 반복한다.
*/

var list = document.querySelector("ul");
for(var i = 0; i<2; i++){
  var target = document.querySelector(".red");
  list.removeChild(target);
}

/*
7. section 태그 자손 중에 blue 라는 클래스를 가진 노드가 있다면,그 하위에 있는 h2 노드를 삭제합니다.

  1. 부모 노드를 section 에 저장.
  2. blue 클래스 노드를 blue에 저장.
  3. h2 노드를 h2 에 저장.
  3. blue 노드가 null 인지 아닌지 검사.
  4. null 이 아닐 경우,
  5. h2 삭제.
*/

var section = document.querySelector("section");
var blue = document.querySelector("section .blue");
var h2 = document.querySelector("section h2");

if(blue !== null){
  section.removeChild(h2);
}
