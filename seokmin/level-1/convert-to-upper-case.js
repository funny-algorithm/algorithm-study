/** 문제

* 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일한 문자열을 출력

*/

/* SUDO.1
  1. Array.split 메소드를 이용해 주어진 문자열을 배열로 만든다.
  2. Array.map 메소드를 이용해 변환된 문자열을 순회하면서 각각의 요소가 소문자이면 대문자로 변경해서 return 한다.
  3. 해당 배열의 길이를 리턴한다.
*/

const solutionA = (word) => {
  const answer = word.split('').map((el) => (el === el.toLowerCase() ? el.toUpperCase() : el));

  return answer.join('');
};

const testA = solutionA('KoreaTimeGood');
console.log(testA);

/* SUDO.2
  1. 새로운 문자열을 저장할 변수를 선언한다.
  2. 주어진 문자열의 길이만큼 순회한다.
  3. 각각의 요소가 소문자이면 대문자로 변경해서 1번 변수에 할당한다.
*/

const solutionB = (word) => {
  let answer = '';

  for (const el of word) {
    el === el.toLowerCase() ? (answer += el.toUpperCase()) : (answer += el);
  }

  return answer;
};

const testB = solutionB('KoreaTimeGood');
console.log(testB);
