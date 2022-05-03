/** 문제

* 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력

*/

/* SUDO.1
  투 포인터 알고리즘을 응용한 문제
  1. 각각의 배열에 대한 pointer를 선언한다.
  2. 두 배열의 길이의 합 만큼 순회한다.
  3. 배열의 index가 넘어섰다면 나머지 배열의 요소들을 push
  4. if(A배열의 pointer1 === B배열의 pointer2) pointer1, pointer2 증가 | 요소를 push
  5. else if (A배열의 pointer1 < B배열의 pointer2) pointer1 증가 | A배열의 요소를 push
  6. else pointer2 증가 | B배열의 요소를 push
*/

const solutionA = (arrayA, arrayB) => {
  const answer = [];

  let pointer1 = 0;
  let pointer2 = 0;

  for (let i = 0; i < arrayA.length + arrayB.length; i++) {
    if (!arrayA[pointer1]) {
      answer.push(...arrayB.slice(pointer2));
      break;
    } else if (!arrayB[pointer2]) {
      answer.push(...arrayA.slice(pointer1));
      break;
    }

    if (arrayA[pointer1] < arrayB[pointer2]) {
      answer.push(arrayA[pointer1++]);
    } else if (arrayA[pointer1] > arrayB[pointer2]) {
      answer.push(arrayB[pointer2++]);
    } else {
      answer.push(arrayA[pointer1++]);
      answer.push(arrayB[pointer2++]);
    }
  }

  return answer;
};

const testA = solutionA([1, 3, 5], [2, 3, 6, 7, 9]);
console.log(testA);

/* SUDO.2
  투 포인터 알고리즘을 응용한 문제
  1. 각각의 배열에 대한 pointer를 선언한다.
  2. pointer1 < arrayA.length, pointer2 < arrayB.length, 두 조건을 만족할 때 까지 반복한다.
  3. if(A배열의 pointer1 === B배열의 pointer2) pointer1, pointer2 증가 | 요소를 push
  4. else if (A배열의 pointer1 < B배열의 pointer2) pointer1 증가 | A배열의 요소를 push
  5. else pointer2 증가 | B배열의 요소를 push
  6. 두 배열의 길이가 다를 수 있기 때문에 
  6.1 pointer1 < arrayA.length 조건에 대하여 반복하며 요소들을 저장한다.
  6.2 pointer2 < arrayB.length 조건에 대하여 반복하며 요소들을 저장한다.
*/

const solutionB = (arrayA, arrayB) => {
  const answer = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer1 < arrayA.length && pointer2 < arrayB.length) {
    if (arrayA[pointer1] < arrayB[pointer2]) {
      answer.push(arrayA[pointer1++]);
    } else if (arrayA[pointer1] > arrayB[pointer2]) {
      answer.push(arrayB[pointer2++]);
    } else {
      answer.push(arrayA[pointer1++]);
      answer.push(arrayB[pointer2++]);
    }
  }

  while (pointer1 < arrayA.length) answer.push(arrayA[pointer1++]);
  while (pointer2 < arrayB.length) answer.push(arrayB[pointer2++]);

  return answer;
};

const testB = solutionB([1, 3, 5], [2, 3, 6, 7, 9]);
console.log(testB);
