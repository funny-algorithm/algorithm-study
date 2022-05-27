/** 문제

https://programmers.co.kr/learn/courses/30/lessons/42889

*/

/* SUDO.1
  1. 실패율을 계산하기 위해 stages의 길이를 구한다.
  2. 1부터 주어진 N까지 반복하고, 0부터 stages의 길이만큼 반복한다.
  3. i와 stages[j]가 같다면 같은 스테이지에 머물러 있는 사람이므로 count를 증가시킨다.
  4. count / stagesLength이 실패율 이므로 해당 숫자와 실패율을 answer에 저장한다.
  5. stagesLength의 길이에서 count만큼 빼준다.
  6. 실패율을 내림차순으로 정렬해야 하므로 sort를 이용해 정렬하고
  7. answer배열의 숫자를 차례대로 반환하면 된다.
*/

const solutionA = (N, stages) => {
  const answer = [];

  let stagesLength = stages.length;

  for (let i = 1; i <= N; i++) {
    let count = 0;

    for (let j = 0; j < stages.length; j++) {
      if (i === stages[j]) count++;
    }

    let failureRate = count / stagesLength;
    answer.push({ i, failureRate });
    stagesLength -= count;
  }

  answer.sort((a, b) => b.failureRate - a.failureRate);

  return answer.map((result) => result.i);
};

const testA = solutionA(N, [2, 1, 2, 6, 2, 4, 3, 3]);
console.log(testA);
