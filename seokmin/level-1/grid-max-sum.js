/** 문제

* N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력

*/

/* SUDO.1
  1. 최대합을 구할 변수를 선언한다.
  2. [행, 열](local), [정대각선, 역대각선](global) 변수를 선언한다.
  3. 행의 합 : grid[i][j]
  4. 열의 합 : grid[j][i]
  5. 정대각선의 합 : if(i === j) grid[i][j]
  6. 역대각선의 합 : if(grid.length - 1 - i === j) grid[i][j];
  7. j의 반복문이 끝나면 Math.max를 이용해서 1번 값, 행, 열에 대한 최대값을 구한다.
  8. 행과 열의 최대합(1번 변수의 값)과 정대각선, 역대각선의 최대합을 구한다.
*/

const solutionA = (grid) => {
  let answer = 0;

  let diagonal = 0;
  let reverseDiagonal = 0;

  for (let i = 0; i < grid.length; i++) {
    let row = 0;
    let column = 0;

    for (let j = 0; j < grid.length; j++) {
      row += grid[i][j];
      column += grid[j][i];

      if (i === j) diagonal += grid[i][j];
      if (grid.length - 1 - i === j) reverseDiagonal += grid[i][j];
    }

    answer = Math.max(answer, row, column);
  }

  return Math.max(answer, diagonal, reverseDiagonal);
};

const testA = solutionA([
  [10, 13, 10, 12, 10],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
]);
console.log(testA);
