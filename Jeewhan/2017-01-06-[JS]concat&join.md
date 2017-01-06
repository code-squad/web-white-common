---
layout: post
title:  "[JS] Concat, Join"
date:   2017-01-06 18:05:00 +0900
categories: JS
---

#### Array.Concat()
둘 또는 그 이상의 배열을 하나로 합치기 위한 함수

##### Syntax

```javascript
var newArray = oldArray.concat(arr1[, arr2[, ...[, arrN]]]);
```

##### Return value
새로운 배열

##### Example

```javascript
var array1 = ["가", "나", "다"];
var array2 = ["라", "마", "바"];

var array3 = array1.concat(array2);
// result array3 [ "가", "나", "다", "라", "마", "바"];


var alpha = ['a', 'b', 'c'];
var alphaNumeric = alpha.concat(1, [2, 3]);

console.log(alphaNumeric); 
// results in ['a', 'b', 'c', 1, 2, 3]
```

---

#### Array.Join()
배열의 요소들을 문자열로 합체

##### Syntax

```javascript
arr.join();
arr.join(separator);
```

##### Return value
문자열

##### Example

```javascript
var a = ['Wind', 'Rain', 'Fire'];

a.join();      // 'Wind,Rain,Fire'
a.join(', ');  // 'Wind, Rain, Fire'
a.join(' + '); // 'Wind + Rain + Fire'
a.join('');    // 'WindRainFire'
```