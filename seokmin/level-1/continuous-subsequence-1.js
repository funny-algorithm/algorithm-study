/** 문제

* N개의 수로 이루어진 수열이 주어진다.
* 이 수열에서 연속부분수열의 합이 특정숫자 M이 되는 경우가 몇 번 있는지 출력

*/

/* SUDO.1
  1. 수들을 더할 변수를 선언하고 주어진 배열의 첫 번째 요소를 할당한다.
  2. pointer1은 0으로, pointer2는 1로 초기화한다.
  3. pointer2가 주어진 배열의 길이보다 작을 동안만 반복하고
  4. if(sum < M) 경우에는 주어진 배열의 pointer2번째 index의 수를 더하고 pointer2를 증가한다.
  5. if(sum > M) 경우에는 주어진 배열의 pointer1번째 index의 수를 빼고 pointer1을 증가한다.
  6. if(sum === M) 경우 count, pointer1, pointer2를 증가한다.
*/

const solutionA = (numberArray, M) => {
  let count = 0;

  let pointer1 = 0;
  let pointer2 = 1;

  let sum = numberArray[pointer1];

  while (pointer2 < numberArray.length) {
    if (sum < M) sum += numberArray[pointer2++];
    else if (sum > M) sum -= numberArray[pointer1++];
    else {
      count++;
      sum -= numberArray[pointer1++];
      sum += numberArray[pointer2++];
    }
  }

  return count;
};

const testA = solutionA([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log(testA);

/* SUDO.2
  1. 주어진 배열을 순회하면서 각각의 요소를 더해준다.
  2. 만약 더한 수가 M과 같을 경우 count를 증가
  3. sum이 M보다 더 커지는 경우에는 M보다 클 동안 반복하면서
  3.1 sum에서 주어진 배열의 pointer1번째 index를 빼고 pointer1을 증가
  3.2 3.1에서 뺀 결과가 M과 같다면 count를 증가시킨다.
*/

const solutionB = (numberArray, M) => {
  let sum = 0;
  let count = 0;

  let pointer1 = 0;

  for (let pointer2 = 0; pointer2 < numberArray.length; pointer2++) {
    sum += numberArray[pointer2];

    if (sum === M) count++;

    while (sum >= M) {
      sum -= numberArray[pointer1++];

      if (sum === M) count++;
    }
  }

  return count;
};

const testB = solutionB([1, 2, 1, 3, 1, 1, 1, 2], 6);
console.log(testB);
