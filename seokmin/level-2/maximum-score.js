/** 문제

* 이번 정보올림피아드대회에서 좋은 성적을 내기 위하여 현수는 선생님이 주신 N개의 문제를 풀려고 한다.
* 각 문제는 그것을 풀었을 때 얻는 점수와 푸는데 걸리는 시간이 주어지게 된다.
* 제한시간 M안에 N개의 문제 중 최대점수를 출력

*/

/* SUDO.1
  1. 재귀함수 선언
  2. 재귀함수는 depth와 score의 합, time의 합을 인자로 받는다.
  3. time의 합이 주어진 총 시간보다 클 경우 재귀함수를 종료
  4. depth가 time배열의 길이와 같다면 이전의 score의 합과 현재의 score의 합을 비교해서 큰 값을 저장
  5. 만들 수 있는 모든 경우의 수를 탐색한다.
  5.1 재귀호출(depth + 1, 점수 + 현재 점수, 시간 + 현재 시간)
  5.2 재귀호출(depth + 1, 점수, 시간)
*/

const solutionA = (T, scores, times) => {
  let answer = 0;

  const recursion = (level, score, time) => {
    if (time > T) return;

    if (level === times.length) answer = Math.max(answer, score);
    else {
      const scoreElement = scores[level];
      const timeElement = times[level];

      recursion(level + 1, score + scoreElement, time + timeElement);
      recursion(level + 1, score, time);
    }
  };

  recursion(0, 0, 0);

  return answer;
};

const scores = [10, 25, 15, 6, 7];
const times = [5, 12, 8, 3, 4];

const testA = solutionA(20, scores, times);
console.log(testA);
