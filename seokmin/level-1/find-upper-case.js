/** 문제

* 문자열이 주어질 때, 해당 문자열에 대문자의 개수를 출력

*/

/* SUDO.1
  1. Array.split 메소드를 이용해 주어진 문자열을 배열로 만든다.
  2. Array.filter 메소드를 이용해 변환된 문자열을 순회하면서 각각의 요소가 대문자인 것만 return 한다.
  3. 해당 배열의 길이를 리턴한다.
*/

const solutionA = (word) => {
  const answer = word.split('').filter((el) => el === el.toUpperCase());

  return answer.length;
};

const testA = solutionA('KoreaTimeGood');
console.log(testA);

/* SUDO.2
  1. 대문자의 개수를 저장할 변수를 선언한다.
  2. 주어진 문자열의 길이만큼 순회한다.
  3. 각각의 요소가 대문자면 count를 1씩 증가시킨다.
*/

const solutionB = (word) => {
  let count = 0;

  for (const el of word) {
    el === el.toUpperCase() && count++;
  }

  return count;
};

const testB = solutionB('KoreaTimeGood');
console.log(testB);
