function getAdd(num1, num2){
  var result = num1 + num2;
  return function(){
    console.log(result);
  }
}

var result_func = getAdd(1,2);
result_func();
console.log(typeof result_func);
