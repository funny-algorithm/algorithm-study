/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12906

*/

/* SUDO.1
  1. arr배열의 길이만큼 순회하면서
  2. 해당 요소와 arr배열[해당 요소의 index + 1]이랑 같지 않으면
  3. 해당 요소를 저장한다.
*/

const solutionA = (arr) => {
  return arr.filter((result, index) => result !== arr[index + 1]);
};

const testA = solutionA([1, 1, 3, 3, 0, 1, 1]);
console.log(testA);
