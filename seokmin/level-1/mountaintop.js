/** 문제

* N*N 격자판에 지도가 주어질 때 각 격자에는 그 지역의 높이가 쓰여있다.
* 각 격자판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역이다.
* 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
* 봉우리 지역이 몇 개 있는지 출력

격자판의 숫자는 (1 <= N <= 50)의 자연수

*/

/* SUDO.1

  상하좌우 확인 조건 : ex) i = 2, j = 2

          (1, 2)                            (i - 1, j)
  (1, 2)  (2, 2) (2, 3)    ->     (i - 1, j)  (i, j)   (i + 1, j)
          (3, 2)                            (i + 1, j)

  1. 격자판을 순회하는 동시에 상하좌우를 확인해야한다. -> 3중 반복문, i j k
  2. 주어진 격자판의 i와 j번째 요소를 기억하고 해당 요소에서 상하좌우를 확인한다.
  3. 상하좌우를 확인하면서 배열을 벗어난 경우는 봉우리 지역이 아니다.
*/

const solutionA = (grid) => {
  let answer = 0;

  const length = grid.length;

  const Xaxis = [-1, 1, 0, 0];
  const Yaxis = [0, 0, -1, 1];

  for (let i = 0; i < length; i++) {
    for (let j = 0; j < length; j++) {
      const currentNumber = grid[i][j];

      let visited = true;

      for (let k = 0; k < Xaxis.length; k++) {
        const x = i + Xaxis[k];
        const y = j + Yaxis[k];

        if (grid[x] && grid[x][y] >= currentNumber) {
          visited = false;
          break;
        }
      }

      if (visited) answer++;
    }
  }

  return answer;
};

const testA = solutionA([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);
console.log(testA);
