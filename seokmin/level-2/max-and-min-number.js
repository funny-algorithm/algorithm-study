/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12939

*/

/* SUDO.1

  1. 주어진 s을 공백 단위로 split 해주고
  2. 각각의 요소를 Number타입으로 변환한다.
  3. 오름차순으로 정렬 후 
  4. 첫 번째 요소와 마지막 요소를 반환한다.
*/

const solutionA = (s) => {
  const answer = s
    .split(' ')
    .map((result) => +result)
    .sort((a, b) => a - b);

  return `${answer[0]} ${answer[answer.length - 1]}`;
};

const testA = solutionA([1, 4, 2], [5, 4, 4]);
console.log(testA);
