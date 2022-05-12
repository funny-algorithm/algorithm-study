/** 문제

* 자연수 N이 주어지면 1부터 N까지의 원소를 갖는 집합의 부분집합을 모두 출력
* 단, 공집합은 출력하지 않는다.

N이 3이라고 가정하면 
{1, 2, 3}, {1, 2}, {1, 3}, {1}, {2, 3}, {2}, {3}
순서대로 출력한다.

*/

/* SUDO.1
  1. 해당 요소를 포함 하느냐 안 하느냐가 중요한 문제!!
  2. N만큼의 길이 + 1의 배열(visted)을 선언하고 0으로 초기화한다.
  3. base case -> 인자로 넘어온 요소가 주어진 N + 1이랑 같을 경우 visited에 1로 체크되어있는 값을 출력
  4. 다음 요소를 확인하기 전 visited의 요소번째 있는 값을 1로 변경
  5. 다음 요소 확인 -> 재귀
  6. 함수 호출이 종료되면 visited의 요소번째 있는 값을 0으로 변경
  7. 함수 종료
*/

const solutionA = (num) => {
  let answer = [];

  const visited = Array.from({ length: num + 1 }).fill(0);

  const subset = (element) => {
    if (element === num + 1) {
      let result = '';

      for (let i = 0; i < visited.length; i++) {
        if (visited[i] === 1) result += i;
      }

      if (result !== '') answer.push(result);
    } else {
      visited[element] = 1;
      subset(element + 1);

      visited[element] = 0;
      subset(element + 1);
    }
  };

  subset(1);

  return answer;
};

const testA = solutionA(3);
console.log(testA);
