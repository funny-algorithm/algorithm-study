/** 문제

https://programmers.co.kr/learn/courses/30/lessons/87389

*/

/* SUDO.1
  1. n을 x로 나눈 나머지 값을 리턴한다.
*/

const solutionA = (n) => {
  for (let i = 1; i <= n; i++) {
    if (n % i === 1) return i;
  }
};

const testA = solutionA(10);
console.log(testA);
