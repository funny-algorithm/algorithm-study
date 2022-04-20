/** 문제

* 연필 1다스는 12자루이고, 학생 1인당 연필을 1자루씩 나누어 준다고 할 때
* N명의 학생수를 입력 받았을 경우 필요한 연필의 다스 수를 출력

*/

/* SUDO.1
  1. 학생수 / 12 (연필 1 다스)를 계산한다.
  2. 나눈 수의 나머지가 존재한다면 몫 + 1을 출력
  3. 그렇지 않은 경우 몫을 출력
*/

const solutionA = (studentCount) => {
  const quotient = Math.floor(studentCount / 12);
  const remainder = studentCount % 12;

  return remainder ? quotient + 1 : quotient;
};

const testA = solutionA(25);
console.log(testA);

/* SUDO.2
  1. Math.ceil 메소드를 이용해 소수점이 있다면 올림한 결과를 출력
*/

const solutionB = (studentCount) => {
  return Math.ceil(studentCount / 12);
};

const testB = solutionA(25);
console.log(testB);
