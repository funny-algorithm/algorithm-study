/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12910

*/

/* SUDO.1
  1. 주어진 arr에 대해 divisor로 나누어 떨어지는 값들만 추려낸다. -> filter
  2. 추려낸 배열을 오름차순으로 정렬한다. -> sort
  3. 2번에서 구한 배열의 길이가 0이면 [-1]를 반환하고
  4. 그렇지 않은 경우 2번의 값을 반환한다.
*/

const solutionA = (arr, divisor) => {
  const filterArr = arr.filter((result) => result % divisor === 0);
  const sortFilterArr = filterArr.sort((a, b) => a - b);

  return sortFilterArr.length === 0 ? [-1] : sortFilterArr;
};

const testA = solutionA([5, 9, 7, 10], 5);
console.log(testA);
