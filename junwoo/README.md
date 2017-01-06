# 스터디 노트 
그날 배운 건 그날그날 정리합시다. 
용어 정리
주석 /*       */         //
함수선언 - 함수 만들기
함수call - 함수 실행- 함수호출
함수는 재사용하기 위해 만든다
함수의 의존성을 낮추는 방법? - 함수 분리하기(의미로 분리하기)
method?
커뮤니티를 통해 코드리뷰하며 성장하기
var - 함수범위
let - {}블록범위
Babel - 문법 변환 도구
return = 함수의 결과 (없으면 undefined)
디버그할때 함수 호출관계 = call stack으로 확인
API = 함수 집합체
---
## 변수  
이쁜 상자

```javascript 
책 배송료
function bookCost(count, price, discount,delCost){

	var total=count*price*(100-discount)/100+delCost ;

	return total;
};

원의 둘레
function circum(r){
	var result= 2*r*Math.PI;
    return result;
};

(x1,y1),(x2,y2) 좌표의 거리
function distance(x1,y1,x2,y2){
	var xdis = x1-x2;
	var ydis = y1-y2;
	var xydis = Math.sqrt(Math.pow(xdis,2)+Math.pow(ydis,2));
	return xydis
};
디버깅하기 쉽기 위해 변수를 많이 써서 중간값을 확인하기 쉽게

for(var i = 0; i<10; i++){
	console.log(i);
};

for(초기값; 계산식; 증감){
	계산식이 참이면 코드 실행하고 증감
}거짓이면 나간다

for 구문
var sum = 0;
for(var i =1; i<=10; i++){
	sum = sum+i;
	     console.log("i = " +  i);
	     console.log("sum = " + sum);
}

var sum = 0;
for(var i =1; i<=10; i++){
	if(1%2===0)
	sum = sum+i;
	     console.log("i = " +  i);
	     console.log("sum = " + sum);
};

var sum = 0;
for(var i =1; i<=10; i=i+2){
	if(i%2===0)
	sum = sum+i;
	     console.log("i = " +  i);
	     console.log("sum = " + sum);
    	 
};

배열선언
var a = [];
a.length;

Method의 기능과 return값 확인해보기
var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
fruits.push("Kiwi");         // 끝에 넣은 후 원소의 갯수
8
fruits;
["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple", "Kiwi"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
fruits.indexOf("Apple"); //원소 순서번호
2          
fruits;
["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
fruits.slice(1, 3); // 1~3사이의 원소가 무엇인지
["Orange", "Apple"]   // 반환값은 사이에 위치한 배열
fruits;
["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"]

var fruits = ["Banana", "Orange", "Apple", "Mango", "Banana", "Orange", "Apple"];
fruits.splice(2, 0, "Lemon", "Kiwi");    //2번째 자리에서 시작해서 0개를 지우고 삽입해라
[]   // 반환값 = 지운배열
fruits;
["Banana", "Orange", "Lemon", "Kiwi", "Apple", "Mango", "Banana", "Orange", "Apple"]

배열의 순회
var fruits = ["apple","mango","banana","tomato","melon"];
for(i=0; i<fruits.length; i++){
	console.log(fruits[i])
};


return을 함부로 쓰지 마라(반복이 잘 되게 해야지)
function plus(){
  if(!checkargs(arguments,"number")){
    console.log("숫자가 아닙니다.");
    return false;
  }else{
    console.log("전부 숫자입니다.");
    return true;
  }
};

function checkargs(args,type){
  for(var i=0; i<args.length; i++){
     
     if(typeof args[i] !== type){
    console.log("wrong number");
      return false;
     } else {
      console.log("right number");
      
     }
  }
  return true;
};

plus(1,2,3,4,"8");
