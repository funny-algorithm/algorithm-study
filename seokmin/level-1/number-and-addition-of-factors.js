/** 문제

https://programmers.co.kr/learn/courses/30/lessons/77884

*/

/* SUDO.1
  1. left부터 right까짓 순회한다.
  2. 1부터 제곱근까지 순회하면서 나누어 떨어지는 수를 count한다.
  3. 제곱근이 정수이면 count * 2 - 1, 개수가 2로 나누어 떨어진다면 -> even을 반환
  4. 제곱근이 정수가 아니면 count * 2, 개수가 2로 나누어 떨어지지 않는다면-> odd를 반환
  5. even을 반환받으면 answer에 더하고, odd를 반환받으면 answer에서 빼준다.
*/

const handleCount = (num) => {
  let count = 0;

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) count++;
  }

  if (Number.isInteger(Math.sqrt(num))) count = count * 2 - 1;
  else count = count * 2;

  return count % 2 === 0 ? 'even' : 'odd';
};

const solutionA = (left, right) => {
  let answer = 0;

  for (left; left <= right; left++) {
    if (handleCount(left) === 'even') answer += left;
    else answer -= left;
  }

  return answer;
};

const testA = solutionA(13, 17);
console.log(testA);
