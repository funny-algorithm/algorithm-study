/** 문제

https://programmers.co.kr/learn/courses/30/lessons/42586

*/

/* SUDO.1
  1. 주어진 progresses에 대한 진도율을 구한다.
  1.1 100에서 progresses의 요소를 빼고 나눈 몫 -> qoutient
  1.2 100에서 progresses의 요소를 빼고 나눈 값 -> remainder
  2. 나머지가 있다면 1.1의 값에 +1을 저장
  3. 나머지가 없다면 1.1의 값을 저장
  4. 투포인트 알고리즘을 이용해서 O(N)으로 해결한다.
  5. leftPoint와 rightPoint를 정의하고
  6. rightPoint가 진도율의 길이가 될때까지 반복하면서
  7. 진도율의 leftPoint의 값이 진도율의 rightPoint보다 같거나 크다면 rightPoint와 count를 증가
  8. 그렇지 않은 경우 count를 answer에 push하고 leftPoint는 rightPoint로 이동, rightPoint는 ringPoint에서 1만큼 이동한다.
  8.1 count를 1로 초기화한다.
*/

const solutionA = (progresses, speeds) => {
  const answer = [];

  const deployDay = [];

  for (let i = 0; i < progresses.length; i++) {
    const minus = 100 - progresses[i];

    const quotient = Math.floor(minus / speeds[i]);
    const remainder = minus % speeds[i];

    if (remainder > 0) deployDay.push(quotient + 1);
    else deployDay.push(quotient);
  }

  let leftPoint = 0;
  let rightPoint = 1;

  let count = 1;

  while (rightPoint <= deployDay.length) {
    if (deployDay[leftPoint] >= deployDay[rightPoint]) {
      rightPoint++;
      count++;
    } else {
      answer.push(count);
      leftPoint = rightPoint;
      rightPoint += 1;
      count = 1;
    }
  }

  return answer;
};

const progresses = [93, 30, 55];
const speeds = [1, 30, 5];
const testA = solutionA(progresses, speeds);
console.log(testA);
