/** 문제

https://school.programmers.co.kr/learn/courses/30/lessons/12943

*/

/* SUDO.1
  1. 주어진 num이 1이 아닐동안 반복하면서
  2. 2로 나눠지면 2를 나누고
  3. 나눠지지 않는다면 3을 곱한 후 1을 더한다.
  4. 반복한 수가 500번이 넘으면 -1를 반환하고
  5. 그렇지 않은 경우에는 반복한 수를 반환한다.
*/

const solutionA = (num) => {
  let answer = 0;

  while (num !== 1) {
    if (num % 2 === 0) num /= 2;
    else num = num * 3 + 1;

    answer++;
  }

  if (answer >= 500) return -1;

  return answer;
};

const testA = solutionA(16);
console.log(testA);
