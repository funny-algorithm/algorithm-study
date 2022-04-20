/** 문제

* 100이하의 자연수 A, B, C 중 가장 작은 값을 출력

*/

/* SUDO.1
  1. Math.min을 사용해서 최소값을 구한다.
*/

const solutionA = (A, B, C) => {
  return Math.min(A, B, C);
};

const testA = solutionA(5, 20, 95);
console.log(testA);

/* SUDO.2
  1. rest parameter로 매개변수를 받는다.
  2. rest배열의 첫 번째를 변수 answer에 저장한다.
  3. rest배열의 두 번째 요소부터 반복한다.
  4. answer의 값 보다 rest배열의 요소가 작다면 answer를 해당 요소로 대체한다.
*/

const solutionB = (...rest) => {
  let answer = rest[0];

  for (let i = 1; i < rest.length; i++) {
    if (answer > rest[i]) answer = rest[i];
  }

  return answer;
};

const testB = solutionB(5, 20, 95);
console.log(testB);
