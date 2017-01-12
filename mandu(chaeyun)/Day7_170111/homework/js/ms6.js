// class 가 'red'인 노드만 삭제합니다.
/*
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
