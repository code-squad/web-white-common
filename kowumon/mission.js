
/*
미션3. straberry아래에 새로운 과일 하나 추가하기
1. 부모노드를 획득한다.
2. 지울 대상을 획득한다.
3. 생성 또는 지운다. 
*/

var ele = document.querySelector("ul");
var newitm = document.createElement("li");
var add_text = document.createTextNode("Musk-melon");
newitm.appendChild(add_text);

ele.appendChild(itm);

/* 
미션 4.바나나와 오렌지 사이에 새 과일 추가하기.
1. 부모노드를 획득한다.
2. li element를 만든다. newitm에 저장한다.
3. textnode를 생성해서 newitm에 추가한다.
4. banana를 찾아 getbanana에 저장한다.
5. insertBefore를 사용해  앞에 getbanana를 추가한다.
*/ 
var parent = document.querySelector("ul");
var newitm = document.createElement("li");
var add_text = document.createTextNode("Musk-melon");
newitm.appendChild(add_text);

var getbanana = parent.querySelector("li:nth-child(3)");
parent.insertBefore(itm, getbanana);

/*
미션 5. apple을 grape와 straberry사이로 옮긴다.
1. 부모요소를 획득한다.
2. apple노드를 찾아서 target에 저장한다. 
3. straberry노드를 찾아서 straberry_node 에 저장한다.
4. insertBefore()를 사용해서 straberry_node앞에 target을 추가한다.
*/

var parent = document.querySelector("ul");
var target = parent.firstElementChild;
var straberry_node = parent.lastElementChild;
parent.insertBefore(target, straberry_node);

/* 
미션6. class가 'red'인 노드만 삭제하기 
1. 부모노드를 획득한다.
2. li.red 노드 전체를 찾아 red_node에 저장한다.
3. 부모노드에서 red_node[0]과 red_node[1]을 제거한다. (removechild)
*/
var parent = document.querySelector("ul");
var red_node = parent.querySelectorAll("ul li.red"); 
parent.removeChild(red_node[0]);
parent.removeChild(red_node[1]);

/* 
1. 부모노드를 저장한다.
2. 지울 대상을 찾는다.
3. 삭제한다.
4. 반복한다.
*/
var parent = document.querySelector("ul");

for(var i = 0; i < 2; i++) {
	var target = document.querySelector(".red");
	parent.removeChild(target);
}

/* 
미션7. section태그의 자손 중에 blue라는 클래스 가지고 있는 노드있다면
그 하위에 있는 h2삭제.
1. 섹션에 있는 blue 클래스를 찾아서 blue_node에 저장한다.
2. blue_node의 할아버지를 찾아서 grandfa에 저장한다.
3. h2 노드를 찾아 h2_node에 저장한다.
4. grandfa에 h2_node를 뺀다.
*/
var blue_node = document.querySelector(".blue");
var grandfa = blue_node.parentNode.parentNode;
var h2node = document.querySelector("section h2");

grandfa.removeChild(h2node);


