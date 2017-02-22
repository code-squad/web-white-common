# 연습문제
1. 주어진 배열에서 최대값을 구하라.
2. 주이진 배열을 뒤집은 배열을 리턴하라.
3. n+1 크기 배열에 1에서 n까지 숫자가 순서없이 있는데 이 중에 단 하나의 중복된 원소가 있다. 이 수를 찾아라.

```javascript
function findMax(array){
  var max = array[0];
  for(var i = i+1; i<array.length; i++){
    if(array[i] > max){
      max = array[i];
    }
  }
  return max;
}
```

```javascript
function changeArray(array) {
    var temp = 0;
    var length = array.length;
    for(var i = 0; i < Math.floor(length/2); i++){
      temp = array[i];
      array[i] = array[(length-1)-i];
      array[(length-1)-i] = array[i];
    }
}
var arr1 = [5,7,1,6,4];
var result = changeArray(arr1);
console.log(result);
```
