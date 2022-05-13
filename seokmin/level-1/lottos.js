/** 문제

https://programmers.co.kr/learn/courses/30/lessons/77484

*/

/* SUDO.1
  1. 순위를 배열로 저장한다. 
  2. 주어진 lottos의 배열 중 정확히 맞는 번호를 찾아낸다.
  3. 주어진 lottos의 배열 중 0의 개수를 찾아낸다.
  4. 최고 순위는 1번 배열의 (2번 + 3번)index의 값
  5. 최저 순위는 1번 배열의 (2번)index의 값
*/

const solutionA = (lottos, win_nums) => {
  const answer = [];

  const ranks = [6, 6, 5, 4, 3, 2, 1];

  const correctCount = lottos.filter((lotto) => win_nums.includes(lotto)).length;
  const zeroCount = lottos.filter((lotto) => lotto === 0).length;

  const high = ranks[correctCount + zeroCount];
  const low = ranks[correctCount];

  answer.push(high, low);

  return answer;
};

const lottos = [44, 1, 0, 0, 31, 25];
const win_nums = [31, 10, 45, 1, 6, 19];

const testA = solutionA(lottos, win_nums);
console.log(testA);
