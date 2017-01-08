function makePyramid(lineNumber) {
  var arr = [];
  var star = "*";
  var space = " ";
  var indexNumber = lineNumber * 2;

  for(var i = 0; i < indexNumber; i++){
    arr.push(space);
  }

  var centerStar_index = Math.floor(indexNumber/2 - 1);

  for(var j=0; j<lineNumber; j++){
    arr[centerStar_index - j] = star;
    arr[centerStar_index + j] = star;
    var eachLine = arr.join(space);
    console.log(eachLine);
  }
}
//makePyramid(10);
/*
                   *
                 * * *
               * * * * *
             * * * * * * *
           * * * * * * * * *
         * * * * * * * * * * *
       * * * * * * * * * * * * *
     * * * * * * * * * * * * * * *
   * * * * * * * * * * * * * * * * *
 * * * * * * * * * * * * * * * * * * *
*/
