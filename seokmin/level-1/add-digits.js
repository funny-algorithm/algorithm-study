/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12931

*/

/* SUDO.1
  1. 주어진 n을 문자열로 변환시키고 각각의 요소를 배열에 넣는다.
  2. reduce를 이용해 각 자리수를 합한다.
*/

const solutionA = (n) => {
  return [...String(n)].reduce((acc, cur) => acc + Number(cur), 0);
};

const testA = solutionA(123);
console.log(testA);
