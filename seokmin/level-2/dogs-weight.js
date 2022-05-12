/** 문제

* 트럭에 실을 수 있는 무게 weight와 개들의 무게가 담겨있는 배열 dogs가 주어지면
* 트럭에 태울 수 있는 가장 무거운 무게를 출력

*/

/* SUDO.1
  1. 재귀함수를 만들고 인자로 depth와 총합을 받는다.
  2. 총합이 주어진 weight보다 클 경우 재귀함수를 종료
  3. depth가 주어진 배열의 길이랑 같아질 때 이전의 총합과 현재의 총합을 비교해 더 큰 무게를 저장한다.
  4. 만들 수 있는 모든 경우의 수를 탐색한다.
  4.1 재귀호출(depth + 1, 총합 + 배열의 level index의 값)
  4.2 재귀호출(depth + 1, 총합)
*/

const solutionA = (weight, dogs) => {
  let answer = 0;

  const length = dogs.length;

  const recursion = (level, sum) => {
    if (sum > weight) return;

    if (level === length) answer = Math.max(answer, sum);
    else {
      const element = dogs[level];

      recursion(level + 1, sum + element);
      recursion(level + 1, sum);
    }
  };

  recursion(0, 0);

  return answer;
};

const testA = solutionA(259, [81, 58, 42, 33, 61]);
console.log(testA);
