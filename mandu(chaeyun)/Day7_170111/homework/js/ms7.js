/* section 태그 자손 중에 blue 라는 클래스를 가진 노드가 있다면,
그 하위에 있는 h2 노드를 삭제합니다. */

/*
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
