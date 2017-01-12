// apple을 grape 와 stawberry 사이에 옮기기.
/*
  1. apple 노드를 클론해서 cloneNode에 저장한다.
  2. copyNode 를 insertBefore() 를 사용해서 stawberry 앞에 추가한다.
  3. 첫 번째 apple 노드를 removeChild()로 삭제한다.
*/
var parent = document.querySelector("ul");
var target = document.querySelector("ul li:first-Child")
var cloneNode = target.cloneNode(true);
parent.insertBefore(cloneNode, document.querySelector("ul li:nth-child(5)"));
parent.removeChild(target);
