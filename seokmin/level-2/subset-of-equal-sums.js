/** 문제

* N개의 원소로 구성된 자연수 집합이 주어지면,
* 이 집합을 두 개의 부분집합으로 나누었을 때 두 부분집합의 원소의 합이 서로 같은 경우가 존재하면 “YES"를 출력하고, 그렇지 않으면 ”NO"를 출력

*/

/* SUDO.1
  1. 주어진 배열의 총합을 구한다.
  2. 재귀함수를 만들고 인자로 depth와 총합을 받는다.
  3. depth가 주어진 배열의 길이랑 같아질 때 
  3.1 배열의 총합 - 총합 = 총합 조건이 만족하면 answer를 YES로 재할당한다.
  4. 만들 수 있는 모든 경우의 수를 탐색한다.
  4.1 재귀호출(depth + 1, 총합 + 배열의 level index의 값)
  4.2 재귀호출(depth + 1, 총합)
*/

const solutionA = (numArray) => {
  let answer = 'NO';

  const total = numArray.reduce((acc, cur) => acc + cur, 0);
  const length = numArray.length;

  const subset = (level, sum) => {
    if (level === length + 1) {
      if (total - sum === sum) answer = 'YES';
    } else {
      const element = numArray[level];

      subset(level + 1, sum + element);
      subset(level + 1, sum);
    }
  };

  subset(0, 0);

  return answer;
};

const testA = solutionA([1, 3, 5, 6, 7, 10]);
console.log(testA);
