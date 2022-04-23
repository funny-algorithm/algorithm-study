/** 문제

* A, B 두 사람이 가위바위보 게임을 하는데 N번의 게임을 하여
* A가 이기면 'A'를, B가 이기면 'B'를, 비기면 D를 출력

1: 가위, 2: 바위, 3: 보

*/

/* SUDO.1
  1. 게임의 승자를 저장할 변수를 선언한다.
  2. 주어진 게임 횟수만큼 반복문을 순회한다.
  3. A와 B를 비교해서 승자를 저장한다.
*/

const solutionA = (length, studentA, studentB) => {
  const answer = [];

  for (let i = 0; i < length; i++) {
    const A = studentA[i];
    const B = studentB[i];

    answer.push(diff(A, B));
  }

  return answer;
};

const diff = (A, B) => {
  if (A === B) return 'D';

  if ((A === 1 && B === 3) || (A === 2 && B === 1) || (A === 3 && B === 2)) return 'A';

  return 'B';
};

const testA = solutionA(5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]);
console.log(testA);
