/** 문제

* 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지는
* 경우삼각형을 만들 수 있으면 'YES' 만들 수 없다면 'NO'를 출력

*/

/** 삼각형의 결정조건

 * 세 변의 길이를 알 경우
 * 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작아야한다.
 */

/** SUDO.1
 * 1. rest parameter로 매개변수를 받는다.
 * 2. 가장 긴 변의 길이를 구한다.
 * 3. rest배열의 길이만큼 반복하면서 다른 두 변의 길이의 합을 구한다.
 * 4. 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작으면 YES, 크다면 NO를 return한다.
 */

const solutionA = (...rest) => {
  let sum = 0;

  const maxLength = Math.max(...rest);

  for (let i = 0; i < rest.length; i++) {
    if (maxLength > rest[i]) sum += rest[i];
  }

  return maxLength < sum ? 'YES' : 'NO';
};

const testA = solutionA(13, 33, 17);
console.log(testA);

/** SUDO.2
 * 1. 매개변수로 받은 세 변의 길이를 전부 더한다.
 * 2. 매개변수로 받은 세 변의 길이의 최대값을 구한다.
 * 3. 1번에서 구한 값 - 2번에서 구한 값 = 최대 길이의 변을 제외한 나머지 두 변의 길이
 * 4. 2번에서 구한 값 < 3번에서 구한 값 ? 'YES' : 'NO'
 */

const solutionB = (A, B, C) => {
  const totalSum = A + B + C;
  const maxLength = Math.max(A, B, C);
  const otherLength = totalSum - maxLength;

  return maxLength < otherLength ? 'YES' : 'NO';
};

const testB = solutionB(13, 33, 17);
console.log(testB);
