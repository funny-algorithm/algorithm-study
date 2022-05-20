/** 문제

https://programmers.co.kr/learn/courses/30/lessons/42840

*/

/* SUDO.1
  1. 세명의 수포자들의 정답을 배열로 정리한다.
  2. 찍은 숫자가 정답일 경우 count할 배열을 만들어준다.
  3. 주어진 정답의 길이만큼 순회하면서
  4. A학생의 i % A.length의 요소가 정답일 경우 count 증가
  5. B학생의 i % B.length의 요소가 정답일 경우 count 증가
  6. C학생의 i % C.length의 요소가 정답일 경우 count 증가
  7. 셋 중 정답을 가장 많이 맞힌 학생의 정답수를 구하고
  8. 3번 반복하는 반복문 안에서 가장 많이 맞힌 정답수와 같은 정답수를 가진 학생을 구한다.
*/

const solutionA = (answers) => {
  const answer = [];

  const A = [1, 2, 3, 4, 5];
  const B = [2, 1, 2, 3, 2, 4, 2, 5];
  const C = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  const count = [0, 0, 0];

  for (let i = 0; i < answers.length; i++) {
    const right = answers[i];

    A[i % A.length] === right && count[0]++;
    B[i % B.length] === right && count[1]++;
    C[i % C.length] === right && count[2]++;
  }

  const max = Math.max(...count);

  for (let i = 0; i < 3; i++) {
    if (max === count[i]) answer.push(i + 1);
  }

  return answer;
};

const testA = solutionA([1, 3, 2, 4, 2]);
console.log(testA);
