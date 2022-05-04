/** 문제

* N개의 수로 이루어진 수열이 주어진다.
* 이 수열에서 연속부분수열의 합이 특정숫자 M이하가 되는 경우가 몇 번 있는지 출력

*/

/* SUDO.1
  1. 주어진 배열만큼 순회하면서 각각의 요소가 M보다 이하인지 확인한다.
  2. 각각의 요소를 더하고 더한 값이 M과 같을 경우 count를 증가한다.
  3. sum이 M보다 같거나 클 경우에 반복하면서 numberArray[pointer1++]을 총합에서 뺀다.
  3.1 sum이 M보다 이하면 count를 증가한다.
*/

const solutionA = (numberArray, M) => {
  let sum = 0;
  let count = 0;

  let pointer1 = 0;

  for (let pointer2 = 0; pointer2 < numberArray.length; pointer2++) {
    if (numberArray[pointer2] <= M) count++;

    sum += numberArray[pointer2];

    if (sum == M) count++;

    while (sum >= M) {
      sum -= numberArray[pointer1++];

      if (sum <= M) count++;
    }
  }

  return count;
};

const testA = solutionA([1, 3, 1, 2, 3], 5);
console.log(testA);
