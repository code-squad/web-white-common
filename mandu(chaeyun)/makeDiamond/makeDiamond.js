function makePyramid(lineNumber) {
  var arr = [];
  var star = "*";
  var space = " ";
  var indexNumber = lineNumber * 2 - 1;

  for(var i = 0; i < indexNumber; i++){
    arr.push(space);
  }

  var centerStar_index = Math.floor(indexNumber/2);

  for(var j=0; j<lineNumber; j++){
    arr[centerStar_index - j] = star;
    arr[centerStar_index + j] = star;
    var eachLine = arr.join(space);
    console.log(eachLine);
  }
  for(var k=0; k<lineNumber; k++){
    arr[k] = space;
    arr[(indexNumber-1) - k] = space;
    var eachLine2 = arr.join(space);
    console.log(eachLine2);
  }
}
makePyramid(4);
/*
makePyramid.js:17       *
makePyramid.js:17     * * *
makePyramid.js:17   * * * * *
makePyramid.js:17 * * * * * * *
makePyramid.js:23   * * * * *
makePyramid.js:23     * * *
makePyramid.js:23       *
makePyramid.js:23
*/
