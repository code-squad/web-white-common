##### 170108 알고리즘 문제

http://tryhelloworld.co.kr/challenge_codes/33

내 코드

```javascript
function jumpCase(num) {
  if (num <= 2) {
    return num;
  }
  else {
    var result = jumpCase(num-2) + jumpCase(num-1);
    return result;
  }
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(32));
```

다른 분의 코드

```javascript
function jumpCase(num) {
    if(num === 1 || num === 2) return num;
  return jumpCase(num-1) + jumpCase(num-2);
}

//아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(jumpCase(4));
```

---

http://tryhelloworld.co.kr/challenge_codes/51

내 코드

```javascript
function setAlign(n, k) {
    var answer = [];
  var numberList = [];
  var divisor = 1;

  for (let i = 1; i <= n; i++) {
    numberList.push(i);
    if (i === n) {
      break;
    }
    divisor *= i;
  }

  for (n; n > 0; n--) {
    if (k > divisor) {
      var pushNumber = parseInt(k / divisor);
      if (k % divisor === 0) {
        pushNumber -= 1;
      }
            answer.push(parseInt(numberList.splice(pushNumber,1)));
      k -= divisor * pushNumber;
      divisor /= n - 1;
    }
    else if (k === 1) {
      for (let i = 0; i < numberList.length; i++) {
        answer.push(parseInt(numberList[i]));
      }
      return answer;
    }
    else if (k === divisor) {
      answer.push(parseInt(numberList.splice(0, 1)));
      for (let i = numberList.length; i > 0; i--) {
        answer.push(parseInt(numberList.splice(-1, 1)));
      }
      return answer;
    }
    else if (k < divisor) {
      answer.push(parseInt(numberList.splice(0, 1)));
      divisor /= n - 1;
    }
  }
    return answer;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(setAlign(8, 3207)); [1, 6, 4, 7, 5, 3, 2, 8]
console.log(setAlign(8, 37928)); [8, 4, 6, 1, 3, 2, 7, 5]
console.log(setAlign(9, 360312)); [9, 8, 4, 3, 5, 7, 6, 2, 1]
```

다른 분의 코드

```javascript
const setArray = n => new Array(n).fill(0).map(((v,i)=>i+1));
const factorial = n => setArray(n).reduce((p,c)=>p*c);
const setAlign = (n, k) => {
  const orderArr = setArray(n);
  const resArr = [], arr = [];
  --k;
  do {
    let fact = factorial(n-1);
    arr.push(Math.floor(k / fact));
    k = k % fact;
    n--;
  } while(n >= 2)
  arr.forEach(v=>{ resArr.push(orderArr.splice(v, 1)[0]); });
  resArr.push( orderArr[0] );
  return resArr;
}

// 아래는 테스트로 출력해 보기 위한 코드입니다.
console.log(setAlign(3, 5));
```