/** 문제

* 거스름돈을 가장 적은 수의 동전으로 교환

m = 거슬러 줄 금액 
arr = 동전의 종류

*/

/* SUDO.1
  1. 재귀호출을 하는데 각 depth와 sum을 인자로 받는다.
  2. sum이 주어진 m의 금액보다 크거나 depth가 answer보다 같거나 클 경우에는 재귀를 탈출한다.
  3. sum이 주어진 m의 금액과 같을 경우에는 depth와 기존의 answer를 비교해서 저 작은 수를 저장한다.
  4. 0부터 arr의 길이만큼 돌면서 depth + 1, sum + arr[i]로 재귀호출한다.
*/

const solutionA = (m, arr) => {
  let answer = 99999;

  const recursion = (L, sum) => {
    if (sum > m || L >= answer) return;

    if (sum === m) answer = Math.min(answer, L);
    else {
      for (let i = 0; i < arr.length; i++) {
        recursion(L + 1, sum + arr[i]);
      }
    }
  };

  recursion(0, 0);

  return answer;
};

const testA = solutionA(15, [1, 2, 5]);
console.log(testA);
