var globalnum =  10;
function first(first_number) {
    var sum = globalnum + first_number;
    var first_result = second(sum);
    return first_result;
}
function second(second_number){
    var sum = globalnum + second_number;
    var second_result = third(sum);
    return second_result;
}
function third(third_number) {
    var sum = globalnum + third_number;
    return sum;
}
console.log(first(1));
