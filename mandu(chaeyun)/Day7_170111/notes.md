2016.01.11.수요일

# DOM
Documnets Object Model

# 브라우저
- 브라우저는 병렬처리를 못한다. 자바스크립트 루프를 계속 돌리면 css나 다른 일들을 못한다.
  그래서 body 하단에 위치한다.
- how browser work
- 추상화. 내부는 비밀

# 기타
- 레퍼런스는 보고 따라해봐야 외워진다.
- 과제는 댓글로
- gitgub 매일 커밋하기
- 컬러: 가산법, 감산법

# 미션1
- html 구조 알아보기
- 예시: naver.com 에서 css 삭제 후 참고


# 노드란 무엇일까?
- <li>사과</li>
- li 가 부모 노드, 사과가 자식 노드.

# DOM 탐색 API
- * 공백도 노드에 포함 *
- Node.childNodes : 노드의 자식노드 그룹을 가져오기.
- Node.firstChild : 노드의 첫번째 자식노드를 가져오기.
- ParentNode.firstElementChild : 부모 노드에서 첫번째 자식 요소. 공백은 #text로 나옴.
- Node.parentElement : 부모 노드를 리턴
- Node.nextSibling : 형제 노드를 리턴. 즉, 다음 노드.
- Node.nextElementSibling : 현재 노드에서 2번 째 떨어진 노드.

# DOM 조작 API
- Node.removeChild() : Node 의 한 자식 노드를 제거. 반환값은 제거 된 노드.
```javascript
var parent = document.querySelector("ul");
var child = document.querySelector("ul li:nth-child(1)");
var removedNode = parent.removeChild(child);
console.log(removedNode);
```

- Node.appendChild() : 리스트에 하나의 아이템()을 덧붙인다.
```javascript
var node = document.createElement("LI");
var textnode = document.createTextNode("Water");
node.appendChild(textnode);
document.querySelector("ul").appendChild(node);
```

- Node.insertBefore() : 특정 노드 앞에 아이템을 추가하기.
```javascript
var newItem = document.createElement("LI");
var textnode = document.createTextNode("Water");
newItem.appendChild(textnode);
var list = document.querySelector("ul");
list.insertBefore(newItem, list.childNodes[0]);
```

- Node.cloneNode() : 노드를 복사해서 리턴한다. 인자로 true, false
```javascript
var itm = document.querySelector(".list1 li:nth-child(1)")
console.log(itm);
var cln = itm.cloneNode(true);
document.querySelector(".list2").appendChild(cln);
```

- replaceChild() : 노드를 교체.
```javascript
var textnode = document.createTextNode("water");
var item = document.querySelector(".list1").childNodes[1];
console.log(item);
item.replaceChild(textnode, item.childNodes[0]);
```

# css 선택자
- p :nth-child(n) : <p>의 n번째 노드 선택.
