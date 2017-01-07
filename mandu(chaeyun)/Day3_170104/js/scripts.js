var calculate = function(num1, num2, op_func){
    return op_func(num1, num2);
}
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
