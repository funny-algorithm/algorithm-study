/** 문제

* 게임 화면은 1 x 1 크기의 칸들로 이루어진 N x N 크기의 정사각 격자이며 위쪽에는 크레인 이 있고 오른쪽에는 바구니가 있다.
* 각 격자 칸에 는 다양한 인형이 들어 있으며 인형이 없는 칸은 빈칸이다.
* 게임 사용자는 크레인을 좌우로 움직여서 멈춘 위치에서 가장 위에 있는 인형을 집어 올릴 수 있다.
* 만약 같은 모양의 인형 두 개가 바구니에 연속해서 쌓이게 되면 두 인형은 터뜨려지면서 바구 니에서 사라지게 된다.
* 크레인 작동 시 인형이 집어지지 않는 경우는 없으나 만약 인형이 없는 곳에서 크레인을 작동 시키는 경우에는 아무런 일도 일어나지 않는다.
* 게임 화면의 격자의 상태가 담긴 2차원 배열 board와 인형을 집기 위해 크레인을 작동시킨 위치가 담긴 배열 moves가 매개변수로 주어질 때, 크레인을 모두 작동시킨 후 터트려져 사라진 인형의 개수를 출력

*/

/* SUDO.1
  1. 위치가 담긴 배열 moves의 길이만큼 순회하면서 크렌인이 작동하는 위치를 구한다. -> moves[i] - 1
  2. board의 길이만큼 순회하면서 board의 열에 해당하는 요소를 탐색한다. -> board[j][moves[i] - 1]
  3. 만약 2번에서 구한 요소가 0이 아닐 경우에는 인형이 있다는 뜻이므로
  3.1 stack에 인형을 저장한다.
  3.2 단, stack의 마지막 요소가 최근에 집어든 인형과 같을 경우에는 push가 아닌 pop을해서 인형을 지운다.
  3.3 지워진 인형을 count한다.
  4. 인형을 집어든 위치에 0을 할당해서 인형이 없음을 표시한다.
  5. 인형이 지워지려면 2개가 존재해야 하기 때문에 3.3에서 구한 count에서 x 2를 반환한다.
*/

const solutionA = (board, moves) => {
  let answer = 0;

  const stack = [];

  for (let i = 0; i < moves.length; i++) {
    const position = moves[i] - 1;

    for (let j = 0; j < board.length; j++) {
      let Yelement = board[j][position];

      if (Yelement !== 0) {
        if (stack[stack.length - 1] === Yelement) {
          stack.pop();
          answer++;
        } else stack.push(Yelement);

        board[j][position] = 0;

        break;
      }
    }
  }

  return answer * 2;
};

const testA = solutionA(
  [
    [0, 0, 0, 0, 0],
    [0, 0, 1, 0, 3],
    [0, 2, 5, 0, 1],
    [4, 2, 4, 4, 2],
    [3, 5, 1, 3, 1],
  ],
  [1, 5, 3, 5, 1, 2, 1, 4]
);
console.log(testA);
