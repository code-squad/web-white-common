#JAVAscript array API

##array.concat
~~~javascript 
var arr1 = ["a", "b", "c"];
var arr2 = ["d", "e", "f"];

var arr3 = arr1.concat(arr2);

// results in a new array [ "a", "b", "c", "d", "e", "f" ]
~~~

##문법
~~~javascript
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
~~~

###입력값
 * 배열 [...] 
 ** 1개 이상의 배열을 입력
 
###리턴값
 * 배열
 ** 1개의 배열 리턴

##세부설명
 * 배열을 다른 배열의 뒤에 이어주는 기능을 한다. 
 * 해당 배열의 값을 변환 하는 것이 아니라 연산한 값만을 반환한다. 


##array.join
~~~javascript
var a = ['Wind', 'Rain', 'Fire'];
a.join();    // 'Wind,Rain,Fire'
a.join('-'); // 'Wind-Rain-Fire'
~~~

##문법
~~~javascript
arr.join()
arr.join(separator)
~~~

##입력값
* () //빈
* '문자' //연결자

##리턴값
* 문자

##세부설명
* 배열에 있는 값들을 1개의 문자값으로 반환한다.
* 입력값이 있으면 배열의 값 사이에 연결자로 붙인다.
* 해당 배열은 값이 변하지 않고서 값만 반환을 한다.
