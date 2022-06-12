/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12944

*/

/* SUDO.1
  1. reduce()를 이용해 배열의 총합을 구한다.
  2. 구한 총합을 배열의 길이로 나눈다.
*/

const solutionA = (arr) => {
  const sum = arr.reduce((acc, cur) => acc + cur, 0);

  return sum / arr.length;
};

const testA = solutionA([1, 2, 3, 4]);
console.log(testA);
