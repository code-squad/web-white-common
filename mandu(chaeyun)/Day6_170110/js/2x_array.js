
/*
2차원 배열 순회.

1. arr 배열을 처음부터 끝까지 열어본다.
2. 하나씩 열어보면서 '배열인지 아닌지' 비교한다.
3. 몇 번째 배열이 배열인지 정보를 index 변수에 저장한다.
4. index 배열에 있는 값들을 content에 저장한다.
5. 몇 번째 배열, 저장값들을 출력한다.

#notes
- 변수 호이스팅 ( variable hoisting) 기능.
- http://chanlee.github.io/2013/12/10/javascript-variable-scope-and-hoisting/
- jshint
- 변수들은 상단에 미리 선언해두면 좋다.
- !해당 안되는 것들을 제외 하기. continue. 코드가 깔끔하다.
  빨리 if문을 탈출할 수 있는 방법이 있다. 생각하고 코딩하자.

# 함수
- join
-
*/
var arr = ["크롱", "jk", "hounx", ["코니", "샐리"], "브라이언"];

arr.forEach(printArrayElement_3);

function printArrayElement_3(element, index, array){

}


function printArrayElement(arr) {
  var index = 0;
  var elements = [];
  var elements_string = "";
  var sentence_array = [];
  var sentence_string = "";

  for(let i = 0; i < arr.length; i++){
    if(Array.isArray(arr[i])){
      index = i;
      elements = arr[i];
    }
  }
  for(let j = 0; j < elements.length; j++){
     elements_string = elements.join(",");
  }
  sentence_array = ["array element는" , index , "번째에 있으며," , "그" , "값은" , elements_string, "입니다."];
  sentence_string = sentence_array.join(" ");
  console.log(sentence_string);
}


printArrayElement(arr);

/*
function printArrayElement_2(arr){
  var content = "";
  for(var i = 0; i < arr.length; i++){
    if( Array.isArray(arr[i]) ){
      for(var j=0; j < arr[i].length; j++){
        content = content + arr[i][j];
      }
      console.log(content,i);
    }
  }
}
printArrayElement_2(arr);
*/
