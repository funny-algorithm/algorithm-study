/** 문제

* 한 개의 문자열을 입력받고, 특정 문자를 입력받아
* 해당 특정 문자가 입력받은 문자열에 몇 개 존재하는지 출력

*/

/* SUDO.1
  1. Array.split 메소드를 이용해 주어진 문자열을 배열로 만든다.
  2. Array.filter 메소드를 이용해 변환된 문자열을 순회하면서 각각의 요소가 주어진 특정 문자와 같은 것만 return 한다.
  3. 해당 배열의 길이를 리턴한다.
*/

const solutionA = (word, character) => {
  const answer = word.split('').filter((el) => el === character);

  return answer.length;
};

const testA = solutionA('COMPUTERPROGRAMMING', 'R');
console.log(testA);

/* SUDO.2
  1. 특정 문자의 개수를 저장할 변수를 선언한다.
  2. 주어진 문자열의 길이만큼 순회한다.
  3. 각각의 요소가 특정 문자와 같다면 count를 1씩 증가시킨다.
*/

const solutionB = (word, character) => {
  let count = 0;

  for (const el of word) {
    el === character && count++;
  }

  return count;
};

const testB = solutionB('COMPUTERPROGRAMMING', 'R');
console.log(testB);
