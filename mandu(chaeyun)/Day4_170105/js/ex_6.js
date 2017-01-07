function plus(a,b){

  var checkResult = checkArgs(arguments, "number");
  return checkResult;
}
function checkArgs(aArg, sType){
  for(let i = 0; i < aArg.length; i++){
    if((typeof aArg[i]) !== sType){
        return false;
    }
    else return true;
  }
}

console.log(plus(1,2));
