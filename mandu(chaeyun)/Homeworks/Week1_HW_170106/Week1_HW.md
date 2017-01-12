# 첫째주 과제

## 1. 홀수 구하기
n개의 숫자를 인자로 받아, while 문을 이용해서 홀수를 출력하는 함수를 만드세요.

### 로직
1. 1부터 N까지 1씩 증가한다.
2. 해당 숫자를 2로 나누어 나머지 값이 1이면, 홀수이다.
3. 해당 숫자를 출력한다.

```javascript
function getOdd(number) {
    for(var i = 1; i <= number; i++){
      if(i % 2 === 1) console.log(i);
    }
}
// getOdd(10); // 1,3,5,7,9
```
## 2. 사각형 넓이 구하기
밑변과 높이를 argument로 받아, 사각형의 넓이를 반환하는 함수를 만드세요.

```javascript
function getRectArea(base, height) {
    var area = base * height ;
    return area;
}
// console.log(getRectArea(10, 4)); // 40
```
## 3. 삼각형 넓이 구하기
밑변과 높이를 argument로 받아, 삼각형의 넓이를 반환하는 함수를 만드세요.

```javascript
function getTriangleArea(base, height) {
    var area = base * height / 2;
    return area;
}

// console.log(getTriangleArea(10,4)); // 20
```

## 4. 삼사각형 넓이 구하기
밑변과 높이를 argument로 받아,사각형과 삼각형의 넓이를 배열에 담아 반환하는 함수를 만드세요.

### 로직
1. area 배열 생성
2. 사각형 넓이를 area[0] 에 저장
3. 삼각형 넓이를 area[1] 에 저장
4. 배열을 리턴
5. getArea 함수 호출
6. 리턴 값을 areaArray 에 저장
7. areaArray 출력.

```javascript
function getArea(base, height) {
    var area = [];
    area[0] = base * height;
    area[1] = base * height / 2;
    return area;
}
console.log(getArea(10,4)); // [40, 20]
```

## 5. 배열 요소 추가/삭제
검색창을 누르면 최근검색어가 노출됩니다.  
최근검색어 리스트를 변경할 수 있도록 'addWord 함수'와 'removeWord 함수'를 만드세요.

```javascript
function addWord(wordsArray, word) {
    wordsArray.push(word);
}

function removeWord(wordsArray, word) {
    var indexLocation = wordsArray.indexOf(word);
    wordsArray.splice(indexLocation, 1);
}

var recentSearchWord = ["코드스쿼드", "자바스크립트그룹"];
addWord(recentSearchWord, "크롱");
console.log(recentSearchWord);  //  [ '코드스쿼드', '자바스크립트그룹', '크롱' ]
removeWord(recentSearchWord, "자바스크립트그룹");
console.log(recentSearchWord);  //  [ '코드스쿼드', '크롱' ]
```

## 6. 배열 요소 중간에 추가
특정배열의 순서에 값을 넣을 수 있는 insertElement 함수를 만드세요.

```javascript
function insertElement(argArray, position, element) {
    argArray.splice(position, 0, element);
}

var myFriends = ["hary", "john", "rock"];
insertElement(myFriends, 2, "james");
console.log(myFriends);
```

## 7. 예습 ‑ 고민하고 알아보기  
javascript 객체(object)는 다음처럼 name(key) 와 value로 구성된 데이터
타입입니다.
`myobj = { "name" : "codesquad" };`

1. name(key)의 value(값)을 얻으려면: `myObj.name;`
2. name(key)의 value(값)을 수정하려면: `obj.name = "masters";`
3. 새로운 값을 추가: `obj.age = 17;`
4. 특정 값을 삭제하려면: `delete obj.age;`
5. 한 서랍장에 있는 물건들을 사무용, 욕실용, 부엌용, 전자기기 등으로 역할별로 나누듯이.  
흩어진 데이터들을 쓰임에 맞게 정리할 수 있다. 정리된 데이터들은 사용자가 찾기도 쉽고 다루기도 쉽다.

## 8. 문서쓰기
배열의 메소드(함수) 중 concat 과 join의 사용법을 익힌 후,
markdown문법으로 작성하고, github에 올려, 그 url을 남겨주세요.  
[Github](https://github.com/MulManDu/web-dev-codesquad/blob/master/arrayMethod.md)
