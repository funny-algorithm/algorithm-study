/** 문제

  https://school.programmers.co.kr/learn/courses/30/lessons/12948

*/

/* SUDO.1
  1. 마지막 4자리를 구별하기 위해 phone_number 길이의 4를 뺀다.
  2. 번호의 길이만큼 반복하면서 i가 1번의 값 보다 작다면 *를 저장하고
  3. 그 외에는 해당 핸드폰 번호를 저장한다.
*/

const solutionA = (phone_number) => {
  let answer = '';

  const maxLength = phone_number.length - 4;

  for (let i = 0; i < phone_number.length; i++) {
    if (i < maxLength) answer += '*';
    else answer += phone_number[i];
  }

  return answer;
};

const testA = solutionA('01033334444');
console.log(testA);
