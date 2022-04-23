/** 문제

* 1 <= N <= 100개의 정수를 입력받아
* 자신의 바로 앞 수보다 큰 수만 출력하며 첫 번째 수는 무조건 출력

*/

/* SUDO.1
  1. 자신의 바로 앞 수보다 큰 수만 저장할 변수를 선언하고 주어진 배열의 첫 번째 요소를 할당한다.
  2. i는 1부터 배열의 길이만큼 순회한다.
  3. 현재의 요소와 이전 요소를 비교해서 현재 요소가 더 크다면 배열에 저장한다.
*/

const solutionA = (numberArray) => {
  const answer = [numberArray[0]];

  for (let i = 1; i < numberArray.length; i++) {
    const currentNumber = numberArray[i];

    if (currentNumber > numberArray[i - 1]) answer.push(currentNumber);
  }

  return answer;
};

const testA = solutionA([7, 3, 9, 5, 6, 12]);
console.log(testA);
