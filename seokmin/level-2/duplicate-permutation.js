/** 문제

* 1부터 N까지 번호가 적힌 구슬이 있습니다. 이 중 중복을 허락하여 M번을 뽑아 일렬로 나열 하는 방법을 모두 출력

*/

/* SUDO.1
  1. index가 M인 배열을 생성한다. -> 뽑는 횟수
  2. 1번부터 N번까지 반복하면서 재귀호출 -> 0부터 M까지 호출
  2.1 1번 배열의 각 index에 해당 값을 저장
  3. if(요소 === M)이 되는 시점에서 answer배열에 1번 배열을 복사해서 할당
*/

const solutionA = (N, M) => {
  const answer = [];
  let temp = Array.from({ length: M }, () => 0);

  const permutation = (element) => {
    if (element === M) {
      answer.push([...temp]);
    } else {
      for (let i = 1; i <= N; i++) {
        temp[element] = i;
        permutation(element + 1);
      }
    }
  };

  permutation(0);

  return answer;
};

const testA = solutionA(3, 2);
console.log(testA);
