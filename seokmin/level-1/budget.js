/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12982

*/

/* SUDO.1
  1. 주어진 d를 오름차순으로 정렬한다. -> sort
  2. 1번에서 구한 배열의 길이만큼 순회하면서 
  3. 각 요소들을 더한다.
  4. 더한 요소가 budget보다 같거나 작으면 count를 증가시키고 
  5. 더 커지는 경우 for문을 종료한다. -> break
*/

const solutionA = (d, budget) => {
  let answer = 0;
  let sum = 0;

  const sortD = d.sort((a, b) => a - b);

  for (let num of sortD) {
    sum += num;
    if (sum <= budget) answer++;
    else break;
  }

  return answer;
};

const testA = solutionA([1, 3, 2, 5, 4], 9);
console.log(testA);
