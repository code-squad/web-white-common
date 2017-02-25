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
# JAVASCRIPT 교육
 - 1주차 숙제 코드리뷰
   * Argument 인자값은 되도록 사용하지 않는 것이 좋다.
   * 변수명은 다른 사람이 알아 볼수 있도록 한다.
   * 예약어를 사용하지 않도록 한다.   
 - Array의 메소드 사용하기  
   * !!를 나타냈을때 false로 나타나는 5가지  
   *  '0','false','unidentifi','NaN','null' ???
 - Object  
 - Object 교육내용 실습  
   * 자신의 코드 설명하기  
   * 다른 사람이 코드를 실행해 보기  
   * 자신이 모르는 내용 질의하기  
