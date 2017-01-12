# 노트

## 오브젝트
- json :

## 일일팀

### Array.prototype.forEach()
- 기능: 배열요소들을 해당함수에 차례로 전달해서 실행한다.
- 실행 후: 배열은 바뀐다.
- 리턴값 : undefined  
- 함수에 element, index, array 가 전달된다.
- forEach() 함수에서는 continue 를 쓸 수 없다. 왜냐하면 for 문이 아니라 함수이기 때문에.

```javascript
var a = ["a", "b", "c"];

a.forEach(function(element) {
    console.log(element);
});

// a
// b
// c
```

### Array.prototype.map()
- 기능: 배열요소들을 전달된 함수에 인자로 전달. 실행. 배열 끝까지 반복실행.
- 함수에 element, index, array 가 전달된다.
- 실행 후: 배열은 그대로이다.
- 리턴값: 함수 결과값들을 새로운 배열로 리턴.

```javascript
var numbers = [1, 5, 10, 15];
var roots = numbers.map(function(x){
   return x * 2;
});
// roots is now [2, 10, 20, 30]
// numbers is still [1, 5, 10, 15]

var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots is now [1, 2, 3]
// numbers is still [1, 4, 9]
```


### Array.prototype.filter()
- 기능: 배열요소는 전달된 함수의 테스트(참,거짓)를 거친다. 참인 배열요소만 모인 새로운 배열을 리턴.
- 함수에 element, index, array 가 전달된다.
- 샐행 후: 배열은 그대로이다.
- 리턴값: 새로운 배열. 테스트를 통과한 배열요소들만 정리해서.

```javascript
function isBigEnough(value) {
  return value >= 10;
}

var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```



# 번외
- 파이 구하기: 사각형과 원의 넓이를 이용해서.
- array.reduce: forEach 안쓰고 다 가능.
