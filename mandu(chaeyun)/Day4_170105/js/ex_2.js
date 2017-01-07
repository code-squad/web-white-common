/* 원의 둘레를 계산하시오 */

const pie = 3.14

function getCircleround(radius) {
  var result = 2 * pie * radius;
  return result;
}

var Circleround = getCircleround(5);
console.log(Circleround);
