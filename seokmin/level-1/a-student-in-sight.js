/** 문제

* 일렬로 서 있는 학생의 키가 앞에서부터 순서대로 주어질 때,
* 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 출력

*/

/* SUDO.1
  1. 학생의 키를 저장할 변수를 선언하고 주어진 배열의 첫 번째 요소를 할당한다.
  2. 보이는 학생의 수를 저장할 변수를 선언하고 첫 번째 학생은 무조건 보이기에 1을 할당한다.
  3. i는 1부터 배열의 길이만큼 순회한다.
  4. 현재 요소가 1번의 값보다 클 경우 학생 수를 1 증가시키고, 2번의 변수에 현재 학생의 키를 할당한다.
*/

const solutionA = (numberArray) => {
  let studentHeight = numberArray[0];
  let count = 1;

  for (let i = 1; i < numberArray.length; i++) {
    const currentStudentHeight = numberArray[i];

    if (currentStudentHeight > studentHeight) {
      studentHeight = currentStudentHeight;
      count++;
    }
  }

  return count;
};

const testA = solutionA([130, 135, 148, 140, 145, 150, 150, 153]);
console.log(testA);
