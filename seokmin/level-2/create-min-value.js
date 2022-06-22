/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12941

*/

/* SUDO.1

  1. 주어진 A는 오름차순으로 정렬한다.
  2. 주어진 B는 내림차순으로 정렬한다.
  3. 두 배열의 길이가 같으므로 A의 길이만큼 순회하면서 
  4. A의 요소와 B의 요소의 곱을 answer에 누적시킨다.
*/

const solutionA = (A, B) => {
  let answer = 0;

  const sortA = A.sort((a, b) => a - b);
  const sortB = B.sort((a, b) => b - a);

  for (let i = 0; i < sortA.length; i++) {
    const A = sortA[i];
    const B = sortB[i];

    answer += A * B;
  }

  return answer;
};

const testA = solutionA([1, 4, 2], [5, 4, 4]);
console.log(testA);
