/** 문제

* N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
* 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
* 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.

*/

/* SUDO.1
  1. 요소와 자릿수의 합을 저장할 객체를 선언한다. -> 0으로 초기화
  2. 주어진 배열을 순회한다.
  3. 만약 해당 요소의 자릿수의 합이 1번의 자릿수의 합 보다 같거나 클 경우 1번의 자릿수의 합을 해당 자릿수의 합으로 재할당한다.
  3.1 만약 1번의 요소보다 해당 요소가 더 클경우 1번 요소는 해당 요소의 값으로 재할당한다.
  4. 1번의 요소를 반환한다.
*/

const solutionA = (numberArray) => {
  const answer = {
    num: 0,
    sum: 0,
  };

  for (let element of numberArray) {
    const elementSum = String(element)
      .split('')
      .reduce((acc, cur) => acc + parseInt(cur), 0);

    if (answer.sum <= elementSum) {
      answer.sum = elementSum;

      if (answer.num < element) answer.num = element;
    }
  }

  return answer.num;
};

const testA = solutionA([128, 460, 603, 40, 521, 137, 123]);
console.log(testA);
