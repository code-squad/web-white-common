// 미션 3 
var ele = document.querySelector("ul");
var itm = document.createElement("li");
var add_text = document.createTextNode("Musk-melon");
itm.appendChild(add_text);

ele.appendChild(itm);

// 미션 4
var ele = document.querySelector("ul");
var itm = document.createElement("li");
var add_text = document.createTextNode("Musk-melon");
itm.appendChild(add_text);

var getbanana = ele.querySelector("li:nth-child(3)");
ele.insertBefore(itm, getbanana);

//미션 5
var ele = document.querySelector("ul");
var apple = ele.firstElementChild;
var cln = apple.cloneNode(true); // apple을 복사 

var getstra = ele.lastElementChild;
ele.insertBefore(apple, getstra);

// 미션6
//특정 클래스 노드 지우기 
var ele = document.querySelector("ul");
var findclass = document.querySelectorAll("li.red"); 




// 미션 7


