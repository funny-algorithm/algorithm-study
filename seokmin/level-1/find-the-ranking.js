/** 문제

* N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력
* 단, 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.

*/

/* SUDO.1
  1. 등수를 구할 변수를 선언한다.
  2. 해당 점수보다 높은 점수를 카운트하는 변수를 선언한 후 1로 초기화를 한다. -> 등수에 0등은 없기 때문에
  3. 주어진 배열로 2중 반복문을 순회한다.
  4. i와 j가 같다면 해당 반복문은 스킵한다.
  5. 주어진 배열의 i보다 j의 값이 더 크다면 2번 변수 값에 + 1을 할당한다.
  6. j의 반복문이 끝나면 1번 변수에 2번 변수값을 push하고 2번 변수는 1로 초기화한다.
*/

const solutionA = (numberArray) => {
  const answer = [];
  let count = 1;

  for (let i = 0; i < numberArray.length; i++) {
    const currentNumber = numberArray[i];

    for (let j = 0; j < numberArray.length; j++) {
      if (i === j) continue;

      const diffNumber = numberArray[j];

      if (currentNumber <= diffNumber) count++;
    }

    answer.push(count);
    count = 1;
  }

  return answer;
};

const testA = solutionA([87, 89, 92, 100, 76]);
console.log(testA);

const testB = solutionA([82, 82, 82, 92, 100]);
console.log(testB);
