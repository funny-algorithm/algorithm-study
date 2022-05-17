/** 문제

https://programmers.co.kr/learn/courses/30/lessons/76501

*/

/* SUDO.1
  1. 주어진 absolutes와 signs의 길이가 같기 때문에 둘 중 하나의 길이만큼 순회한다.
  2. sign의 값이 true이면 absolutes 각각의 요소를 저장하고
  3. sign의 값이 false이면 absolutes 각각의 요소 * -1 (음수를 만든다)를 저장한다.
  4. reduce를 이용해 구한 요소들의 합을 구한다.
*/

const solutionA = (absolutes, signs) => {
  const answer = [];

  for (let i = 0; i < absolutes.length; i++) {
    const absolute = absolutes[i];
    const sign = signs[i];

    sign ? answer.push(absolute) : answer.push(absolute * -1);
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
};

const absolutes = [4, 7, 12];
const signs = [true, false, true];

const testA = solutionA(absolutes, signs);
console.log(testA);
