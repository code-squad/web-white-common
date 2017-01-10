
// 계산
var calculate = function(num1, num2, op_func){
    if(checkargs(num1, num2, "number")){
      return op_func(num1, num2);
    }
    console.log("입력 타입이 틀렸습니다.")
}
// 인자 타입 불일치에 체크
function checkargs(num1, num2, type){
  for(let i = 0; i < arguments.length-1; i++){
    if(typeof arguments[i] !== arguments[arguments.length-1])
      return false
    else return true;
  }
}
  /*
  if(typeof num1 === type){
    if(typeof num2 === type){
      return true;
    }
  }
  else return false;
}*/
// 수식 함수들
var sum = function(a,b){
  return a+b;
}
var minus = function(a,b){
  return a-b;
}
var multiply = function(a,b){
  return a*b;
}
var average = function(a,b){
  return (a+b)/arguments.length;
}
var sumResult = calculate(10,20,sum);
var minusResult = calculate(10,20,minus);
var multiplyResult = calculate(10,20,multiply);
var averageResult = calculate(34,63,average);

console.log("sum is "+ sumResult);
console.log("minus is "+ minusResult);
console.log("multiply is "+ multiplyResult);
console.log("average is "+ averageResult);
