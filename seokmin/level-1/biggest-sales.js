/** 문제

* N일 동안의 매출기록을 주어지면 연속된 M일 동안의 최대 매출액 출력

*/

/* SUDO.1
  1. 주어진 배열의 길이의 - M + 1 만큼 순회한다. -> 배열을 전부 순회하지 않아도 연속된 M일 동안의 매출을 구하면 되기 때문
  2. i번재부터 i+M까지 반복하면서 연속된 M일의 매출을 구한다.
  3. 이전의 매출액, 현재의 매출액을 비교하면서 더 큰 매출을 저장한다.
*/

const solutionA = (numberArray, M) => {
  let answer = 0;

  for (let i = 0; i < numberArray.length - M + 1; i++) {
    let sum = 0;
    let index = i;

    while (index < i + M) sum += numberArray[index++];

    answer = Math.max(answer, sum);
  }

  return answer;
};

const testA = solutionA([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
console.log(testA);

/* SUDO.2
  슬라이딩 윈도우 기법
  ex ) [1, 2, 3, 4, 5], 3(연속 부분)이 주어진다고 가정하면
  첫 번째, 1 + 2 + 3 = 6
  두 번째, 2 + 3 + 4 = 9
  세 번째, 3 + 4 + 5 = 12

  슬라이딩 윈도우 기법은 이런식으로 처음 index부터 종료 index까지 구하는 것이 아니라
  첫 번째, 1 + 2 + 3 = 6 -> 0, 1, 2 index의 합
  두 번째, 6 + 4 - 1 = 9  -> ↑ 합 + 3 index - 0 index
  세 번째, 9 + 5 - 2 = 12 -> ↑ 합 + 4 index - 1 index
  이런식으로 O(N)의 시간복잡도로 풀 수 있다.
*/

const solutionB = (numberArray, M) => {
  let answer = 0;

  let sum = 0;

  for (let i = 0; i < numberArray.length; i++) {
    if (i >= M) sum += numberArray[i] - numberArray[i - M];
    else sum += numberArray[i];

    answer = Math.max(answer, sum);
  }
  return answer;
};

const testB = solutionB([12, 15, 11, 20, 25, 10, 20, 19, 13, 15], 3);
console.log(testB);
