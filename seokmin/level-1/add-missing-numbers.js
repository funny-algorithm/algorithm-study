/** 문제

https://programmers.co.kr/learn/courses/30/lessons/86051

*/

/* SUDO.1
  1. 1부터 9까지의 합을 구한다.
  2. 주어진 numbers의 길이만큼 순회하면서 1번에서 구한 값에서 각각의 요소를 빼준다.
*/

const solutionA = (numbers) => {
  let answer = (9 * (9 + 1)) / 2;

  for (let num of numbers) {
    answer -= num;
  }

  return answer;
};

const testA = solutionA([1, 2, 3, 4, 6, 7, 8, 0]);
console.log(testA);
