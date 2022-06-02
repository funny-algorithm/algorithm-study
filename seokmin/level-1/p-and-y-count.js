/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12916

*/

/* SUDO.1
  1. 주어진 문자열 s에 대해 소문자로 변환한다.
  2. p와 y의 개수를 셀 변수를 선언하고
  3. s의 길이만큼 반복하면서 p와 y의 개수를 구한다.
*/

const solutionA = (s) => {
  s = s.toLowerCase();

  let pCnt = 0;
  let yCnt = 0;

  for (let i = 0; i < s.length; i++) {
    s[i] === 'p' && pCnt++;
    s[i] === 'y' && yCnt++;
  }

  if (pCnt === 0 && yCnt === 0) return true;

  return pCnt === yCnt ? true : false;
};

const testA = solutionA('pPoooyY');
console.log(testA);
