/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12899

*/

/* SUDO.1
  3진법과 유사한 방법으로 풀이

  1. 주어진 n에 대해 3으로 나눈다.
  2. 몫이 0보다 클 경우에만
  3. 몫이 0인 경우 몫에서 1을 뺀 숫자를 n에 대입한다.
  4. 몫이 0이 아닌 경우 나머지 값을 [4, 1, 2] 배열의 index로 활용한다.
*/

const solutionA = (n) => {
  let answer = '';

  const numArr = [4, 1, 2];

  while (n > 0) {
    answer = numArr[n % 3] + answer;

    if (n % 3 !== 0) n = Math.floor(n / 3);
    else n = n / 3 - 1;
  }

  return answer;
};

const testA = solutionA(10);
console.log(testA);
