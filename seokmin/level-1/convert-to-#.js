/** 문제

* 주어진 문자열의 A를 #으로 바꿔어 출력

*/

/* SUDO.1
  1. Array.split 메소드를 이용해서 해당 문자열을 배열로 만든다.
  2. 변환된 배열을 순회하면서 A를 #으로 대체한 후 Array.join 메소드를 이용해서 문자열로 변환한다.
*/

const solutionA = (word) => {
  const answer = word.split('').map((el) => (el === 'A' ? '#' : el));

  return answer.join('');
};

const testA = solutionA('BANANA');
console.log(testA);

/* SUDO.2
  1. 새로운 문자열을 저장할 변수를 선언한다.
  2. 주어진 문자열의 길이만큼 순회한다.
  3. 각각의 요소를 1번에서 선언한 변수에 할당하는데 'A'를 만나면 '#'을 할당한다.
*/

const solutionB = (word) => {
  let answer = '';

  for (const el of word) {
    el === 'A' ? (answer += '#') : (answer += el);
  }

  return answer;
};

const testB = solutionB('BANANA');
console.log(testB);
