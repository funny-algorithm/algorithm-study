/** 문제

https://programmers.co.kr/learn/courses/30/lessons/42748?language=javascript

*/

/* SUDO.1
  1. commands 배열을 순회하면서 i, j, k의 값을 구한다.
  2. array 배열의 i - 1 인덱스부터 j index까지 slice하고 오름차순으로 정렬 후 k - 1번째 index를 구한다.
*/

const solutionA = (array, commands) => {
  const answer = [];

  for (const command of commands) {
    const [i, j, k] = command;

    const result = array.slice(i - 1, j).sort((a, b) => a - b)[k - 1];

    answer.push(result);
  }

  return answer;
};

const array = [1, 5, 2, 6, 3, 7, 4];
const commands = [
  [2, 5, 3],
  [4, 4, 1],
  [1, 7, 3],
];

const testA = solutionA(array, commands);
console.log(testA);
