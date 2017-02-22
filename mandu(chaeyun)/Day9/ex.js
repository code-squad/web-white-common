function changeArray(array) {
    var temp = 0;
    var length = array.length;
    for(var i = 0; i < Math.floor(length/2); i++){
      temp = array[i];
      array[i] = array[(length-1)-i];
      array[(length-1)-i] = temp;
    }
}


function changeArray2(array){
  var array2 = [];
  var length = array.length;
  for(var i = 0; i < length; i++){
    array2[i] = array[length-1 - i];
  }
  return array2;
}
var arr1 = [5,7,1,6,4];
var result = changeArray2(arr1);
console.log(result);
