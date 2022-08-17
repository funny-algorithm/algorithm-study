/** 문제

https://school.programmers.co.kr/learn/courses/30/lessons/12924

*/

/* SUDO

  주어진 자연수를 연속된 자연수의 합으로 표현하는 방법의 수와 주어진 수의 홀수인 약수 갯수는 같다.
  
  1. n % i === 0 -> 약수 구하기
  2. i % 2 === 1 -> 약수 중 홀수 구하기
  3. 1 && 2 조건에 만족하면 answer 증가
*/

const solutionA = (n) => {
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    if (n % i === 0 && i % 2 === 1) answer++;
  }

  return answer;
};

const testA = solutionA(15);
console.log(testA);
