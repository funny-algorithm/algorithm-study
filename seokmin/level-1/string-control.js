/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12918

*/

/* SUDO.1
  1. s의 길이가 4 또는 6이 아니면 false를 리턴한다.
  2. s를 배열로 변환 후 every() 메소드를 사용해 모든 요소를 탐색한다. 
  3. 숫자만 있는 경우 true를, 그렇지 않은 경우 false를 리턴한다. -> every()의 반환값은 boolean
*/

const convert = (s) => {
  const length = [4, 6];

  if (!length.includes(s.length)) return false;

  return s.split('').every((result) => !isNaN(result));
};

const testA = solutionA('a234');
console.log(testA);
