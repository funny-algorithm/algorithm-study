/** 문제

* 7개의 자연수가 주어지면 그 숫자 중 가장 작은 수를 출력

*/

/* SUDO.1
  1. Math.min 메소드를 이용해서 최소값을 구한다.
*/

const solutionA = (numberArray) => {
  return Math.min(...numberArray);
};

const testA = solutionA([5, 3, 7, 11, 2, 15, 17]);
console.log(testA);

/* SUDO.2
  1. 최소값을 담을 변수를 선언한 후 배열의 첫 번째 요소를 할당한다.
  2. 1부터 배열의 길이만큼 순회한다.
  3. 최소값을 담은 변수와 배열의 각각의 요소를 비교하면서
  3.1 (최소값 > 배열의 각각의 요소) 조건이 만족한다면 최소값을 배열의 요소로 재할당한다.
  4. 최소값을 return 한다.
*/

const solutionB = (numberArray) => {
  let minNumber = numberArray[0];

  for (let i = 1; i < numberArray.length; i++) {
    if (minNumber > numberArray[i]) {
      minNumber = numberArray[i];
    }
  }

  return minNumber;
};

const testB = solutionB([5, 3, 7, 11, 2, 15, 17]);
console.log(testB);
