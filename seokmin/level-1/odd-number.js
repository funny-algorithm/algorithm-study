/** 문제

* 7개의 자연수가 주어질 때
* 홀수인 자연수들을 모두 골라 합을 구하고
* 고른 홀수들 중 최소값을 찾아 출력

*/

/* SUDO.1
  1. Array.filter 메소드를 통해 홀수를 판별한다.
  2. 합의 값을 담을 변수와 최소값의 변수를 선언한다.
  2.1 최소값의 변수는 선언과 동시에 1번에서 구한 배열의 첫 번째 요소를 할당한다.
  3. 1번에서 구한 배열의 길이만큼 순회한다.
  4. 배열의 요소들을 합의 변수에 저장한다.
  5. 배열의 요소들을 최소값 변수의 값과 비교하면서 최소값을 판단한다.
*/

const solutionA = (numberArray) => {
  const oddNumber = numberArray.filter((number) => number % 2 === 1);

  let oddTotal = 0;
  let minNum = oddNumber[0];

  for (let i = 0; i < oddNumber.length; i++) {
    oddTotal += oddNumber[i];

    if (minNum > oddNumber[i]) {
      minNum = oddNumber[i];
    }
  }

  return { oddTotal, minNum };
};

const testA = solutionA([12, 77, 38, 41, 53, 92, 85]);
console.log(testA);
