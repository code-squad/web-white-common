/*
1. 1~100 합
2. 짝수합
3. 홀수합
4. 소수만 출력
5. 피보나치 수열 for로만.
*/

/*
var sum100 = 0;
for(let i=0; i<100; i++){
  sum100 += i;
}
console.log(sum100);
*/

/*
var result = 0;
for(let i = 1; i <= 100; i++){
  if((i % 2) === 0) result += i;
}
console.log(result);
*/


for(let i=1; i<=100; i++){
  if(i%2 && i%3 != 0) console.log(i);
  else if(i=2 || i=3) console.log(i);
}
