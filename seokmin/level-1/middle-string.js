/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12903

*/

/* SUDO.1
  1. s의 길이를 2로 나눈 값을 구한다.
  2. s의 길이가 짝수이면 s의 [1번에서 구한 값] -> s[result]
  3. s의 길이가 홀수이면 slice를 이용해 1번에서 구한 값 - 1 부터 1번에서 구한 값 + 1 -> s.slice(result - 1, result + 1);
  4. s의 길이가 짝수이면 2번 값을, 홀수이면 3번값을 반환
*/

const convert = (s) => {
  const result = Math.floor(s.length / 2);

  const odd = s[result];
  const even = s.slice(result - 1, result + 1);

  return s.length % 2 === 0 ? even : odd;
};

const testA = solutionA('abcde');
console.log(testA);
