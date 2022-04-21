/** 문제

* 6월 1일부터 자동차 10부제를 시행한다.
* 날짜의 일의 자리 숫자가 주어지고, 자동차 번호의 끝 두 자리 수가 주어질 때
* 자동차 10부제를 위반하는 자동차의 대수를 출력

*/

/* SUDO
  1. 위반하는 자동차의 대수를 저장할 변수를 선언한다.
  2. 주어진 자동차 번호의 배열의 길이만큼 순회한다.
  3. 자동차 번호를 10으로 나눈 나머지의 값이 day와 동일하다면
  4. 위반하는 자동차의 대수를 1씩 증가시킨다.
*/

const solutionA = (day, carNumbers) => {
  let count = 0;

  for (let carNumber of carNumbers) {
    if (day === carNumber % 10) count++;
  }

  return count;
};

const testA = solutionA(3, [2, 23, 11, 47, 53, 17, 33]);
console.log(testA);
