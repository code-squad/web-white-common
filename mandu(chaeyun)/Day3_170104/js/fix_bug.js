function checkargs(a,b,type) {
  if(typeof a !== type || typeof b !== type) return false;
  else return true;
}

function multiplyDouble(num1,num2) {
  var DOUBLE = 2;
  var multiply = num1 * num2;
  var result = multiply * DOUBLE;

  return result;
}

function calculate(num1,num2, func) {
  var checkResult = checkargs(num1, num2, "number");
  if(checkResult === false) return "not number";

  if(typeof(func) !== "function") return "not function..";

  var result = multiplyDouble(num1,num2);
  console.log("result is ", result);
}

calculate(10,3,multiplyDouble);
