/** 문제

* N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력

*/

/* SUDO.1
  1. 주어진 배열을 순회한다.
  2. 각각의 요소를 뒤집은 후 isPrime 함수에 대입해서 true를 반환받으면
  2.1 해당 값을 push
*/

const isPrime = (num) => {
  if (num <= 1) return false;
  else if (num % 2 === 0) return num === 2 ? true : false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const solutionA = (numberArray) => {
  let answer = [];

  for (let num of numberArray) {
    const reverseNum = parseInt(String(num).split('').reverse().join(''));

    isPrime(reverseNum) && answer.push(reverseNum);
  }

  return answer;
};

const testA = solutionA([32, 55, 62, 20, 250, 370, 200, 30, 100]);
console.log(testA);
