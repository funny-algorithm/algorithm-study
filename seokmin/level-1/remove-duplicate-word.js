/** 문제

* N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력

*/

/* SUDO.1
  1. 중복되지 않은 문자열을 저장할 변수를 선언한다.
  2. 주어진 문자열의 길이만큼 순회한다.
  3. indexOf 메소드를 이용해서 해당 문자열이 처음 등장하는 index를 찾아낸 후
  4. index와 i를 비교해서 같다면 1번 변수에 문자열을 추가한다.
*/

const solutionA = (words) => {
  const answer = [];

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    if (words.indexOf(word) === i) answer.push(word);
  }

  return answer;
};

const testA = solutionA(['good', 'time', 'good', 'time', 'student']);
console.log(testA);

/* SUDO.2
  1. Array.filter 메소드를 이용해서 주어진 단어를 순회한다.
  2. indexOf 메소드를 이용해서 해당 문자열이 처음 등장하는 index를 찾아낸 후
  3. index와 i를 비교해서 같다면 1번 변수에 문자열을 추가한다.
*/

const solutionB = (words) => {
  const answer = words.filter((word, index) => words.indexOf(word) === index);

  return answer;
};

const testB = solutionB(['good', 'time', 'good', 'time', 'student']);
console.log(testB);
