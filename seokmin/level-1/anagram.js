/** 문제

* 두 문자열이 알파벳의 나열 순서는 다르지만 구성이 일치하면 두 단어는 아나그램이다.
* 두 단어가 주어질 때 두 단어가 아나그램이면 'YES'를 아니면 'NO'를 출력

*/

/* SUDO.1
  1. Map객체를 생성한다.
  2. word1를 순회하면서 Map객체에 key값이 있다면 value를 1 증가, 없다면 value를 0으로 초기화
  3. word2를 순회하면서 Map객체에 key값이 있다면 value를 1 감소
  4. key값이 없다면 NO를 리턴
  5. key값이 있는데 value값이 0이면 아나그램이 아니므로 NO리턴
*/

const solutionA = (word1, word2) => {
  const word1Map = new Map();

  for (const word of word1) {
    if (word1Map.has(word)) word1Map.set(word, word1Map.get(word) + 1);
    else word1Map.set(word, 1);
  }

  for (const word of word2) {
    if (word1Map.has(word)) word1Map.set(word, word1Map.get(word) - 1);

    if (!word1Map.has(word) || word1Map.get(word) === 0) return 'NO';
  }

  return 'YES';
};

const testA = solutionA('AbaAeCe', 'baeeACA');
console.log(testA);

const testB = solutionA('abaCC', 'Caaab');
console.log(testB);
