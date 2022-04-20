/** 문제

* N의 값이 주어질 때 1부터 N까지의 합을 출력

*/

/* SUDO
  1. 공식 이용하기 -> n(n+1) / 2
*/

const solutionA = (N) => {
  return (N * (N + 1)) / 2;
};

const testA = solutionA(10);
console.log(testA);
