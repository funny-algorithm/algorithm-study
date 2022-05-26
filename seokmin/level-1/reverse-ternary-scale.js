/** 문제

https://programmers.co.kr/learn/courses/30/lessons/68935

*/

/* SUDO.1
  1. 주어진 n에 대해서 3진법으로 변경 -> n.toString(3)
  2. 뒤집어 주기 위해 배열로 변환하고 -> split('')
  3. 다시 문자열로 만들어준다 -> join('')
  4. parseInt를 이용해 10진법으로 변경한다 -> parseInt(_, 3)
*/

const solutionA = (n) => {
  return parseInt(n.toString(3).split('').reverse().join(''), 3);
};

const testA = solutionA(45);
console.log(testA);
