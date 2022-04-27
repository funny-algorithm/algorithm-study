/** 문제

* 문자열이 주어지면 해당 문자열에서 숫자만 출력
* 0123의 경우에는 123을 출력

*/

/* SUDO.1
  1. 주어진 문자열에 대해 순회한다.
  2. 해당 요소가 숫자면 요소를 저장한다. -> 숫자 판단 -> isNaN()
*/

const solutionA = (words) => {
  let answer = '';

  for (let word of words) {
    if (!isNaN(word)) answer += word;
  }

  return parseInt(answer);
};

const testA = solutionA('g0en2T0s8eSoft');
console.log(testA);
