/** 문제

* 여러 개의 OX 문제로 만들어진 시험에서 연속적으로 답을 맞히는 경우에는 가산점을 주기 위해서 다음과 같이 점수 계산을 하기 로 하였다.
* 1번 문제가 맞는 경우에는 1점으로 계산한다. 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산한다.
* 또한, 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산한다. 틀린 문제는 0점으로 계산한다.
* 시험문제의 채점 결과가 주어졌을 때, 총 점수를 출력

*/

/* SUDO.1
  1. 총 점수를 저장할 변수를 선언한다.
  2. 가산점을 계산할 변수를 선언한다.
  3. 요소가 1일 경우 2번의 값을 1씩 증가시키고 총 점수에 더해준다.
  4. 요소가 0일 경우 2번의 값을 0으로 재할당한다.
*/

const solutionA = (numberArray) => {
  let answer = 0;
  let count = 0;

  for (let num of numberArray) {
    if (num === 1) {
      count++;
      answer += count;
    } else count = 0;
  }

  return answer;
};

const testA = solutionA([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]);
console.log(testA);
