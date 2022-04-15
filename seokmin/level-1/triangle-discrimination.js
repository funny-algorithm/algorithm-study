/** 문제

* 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지는
* 경우삼각형을 만들 수 있으면 'YES' 만들 수 없다면 'NO'를 출력

*/

/** 삼각형의 결정조건

 * 세 변의 길이를 알 경우
 * 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작아야한다.
 */

/** SUDO
 * 1. rest parameter로 매개변수를 받는다.
 * 2. 가장 긴 변의 길이를 구한다.
 * 3. rest배열의 길이만큼 반복하면서 다른 두 변의 길이의 합을 구한다.
 * 4. 가장 긴 변의 길이가 다른 두 변의 길이의 합보다 작으면 YES, 크다면 NO를 return한다.
 */

const solution = (...rest) => {
  let sum = 0;

  const maxNumber = Math.max(...rest);

  for (let i = 0; i < rest.length; i++) {
    if (maxNumber > rest[i]) sum += rest[i];
  }

  return maxNumber < sum ? 'YES' : 'NO';
};

const test = solution(13, 33, 17);
console.log(test);
