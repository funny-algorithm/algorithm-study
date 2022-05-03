/** 문제

* A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력

*/

/* SUDO.1
  1. 주어진 두 배열에 대해 pointer를 선언하고, 오름차순으로 정렬한다.
  2. pointer1와 pointer2의 요소가 같다면 pointer1, pointer2 증가 및 해당 요소를 저장한다.
  3. pointer1보다 pointer2의 요소가 더 크면 pointer1 증가 및 해당 요소를 저장한다.
  4. pointer1보다 pointer2의 요소가 더 작으면 pointer2 증가 및 해당 요소를 저장한다.
*/

const solutionA = (arrayA, arrayB) => {
  const answer = [];

  arrayA.sort((a, b) => a - b);
  arrayB.sort((a, b) => a - b);

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arrayA.length && pointer2 < arrayB.length) {
    if (arrayA[pointer1] < arrayB[pointer2]) pointer1++;
    else if (arrayA[pointer1] > arrayB[pointer2]) pointer2++;
    else {
      answer.push(arrayA[pointer1++]);
      pointer2++;
    }
  }

  return answer;
};

const testA = solutionA([1, 3, 9, 5, 2], [3, 2, 5, 7, 8]);
console.log(testA);
