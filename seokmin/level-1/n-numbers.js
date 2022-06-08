/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12954

*/

/* SUDO.1
  1. 1부터 x까지 반복하면서
  2. x의 i를 곱한 값을 answer에 저장한다.
*/

const solutionA = (x, n) => {
  let answer = [];

  for (let i = 1; i <= n; i++) {
    let result = x * i;

    answer.push(result);
  }

  return answer;
};

const testA = solutionA(2, 5);
console.log(testA);
