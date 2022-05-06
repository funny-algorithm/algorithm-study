/** 문제

* 왕은 왕자들을 나이 순으로 1번부터 N번까지 차례로 번호를 매긴다.
* 1번 왕자부터 N 번 왕자까지 순서대로 시계 방향으로 돌아가며 동그랗게 앉게 한다.
* 1번 왕자부터 시 계방향으로 돌아가며 1부터 시작하여 번호를 외치게 한다.
* 한 왕자가 K(특정숫자)를 외치면 그 왕자는 공주를 구하러 가는데서 제외되고 원 밖으로 나오게 된다.
* 다음 왕자부터 다시 1부터 시작하여 번호를 외친다.
* N과 K가 주어질 때 공주를 구하러 갈 왕자의 번호를 출력

*/

/* SUDO.1
  1. 1부터 N까지의 배열을 만든다. -> queue
  2. queue의 길이가 1이 아닐 경우동안만 반복한다. queue의 길이가 1이되면 while문 종료
  3. 1부터 K까지 반복하면서 배열의 앞의 요소를 맨 마지막으로 이동시켜준다.
  4. 3번에서 구한 배열의 맨 앞의 요소는, 즉 번호를 외친 왕자는 배열에서 제외시킨다.
*/

const solutionA = (N, K) => {
  const queue = Array.from({ length: N }, (_, i) => i + 1);

  while (queue.length !== 1) {
    for (let i = 0; i < K - 1; i++) queue.push(queue.shift());
    queue.shift();
  }

  return queue[0];
};

const testA = solutionA(8, 3);
console.log(testA);
