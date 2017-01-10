var x1 = 1;
var y1 = 2;
var x2 = 3;
var y2 = 4;

function calculate_distance(x1, y1, x2, y2) {
    var x_distance = x2 - x1;
    var y_distance = y2 - y1;
    var result = Math.sqrt(Math.pow(x_distance,2) + Math.pow(y_distance,2));
    return result;
}

var distance = calculate_distance(x1, y1, x2, y2);
console.log(distance);
