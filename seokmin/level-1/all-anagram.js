/** 문제

* S문자열에서 T문자열과 아나그램이 되는 S의 부분문자열의 개수를 출력

*/

/* SUDO.1
  1. Map객체를 생성한다.
  2. word2를 순회하면서 Map객체에 key와 value를 생성
  3. word1의 길이 - word2의 길이 + 1 만큼 반복하면서
  4. 연속된 부분을 탐색한다. -> while(index < i + word2.length)
  5. word1의 요소가 Map객체에 존재한다면 value를 -1 해주고, value가 0이 되면 해당 key를 삭제한다.
  6. while문을 빠져나와서 Map객체의 크기가 0이라면 아나그램 이므로 answer을 1씩 증가시킨다.
*/

const solutionA = (word1, word2) => {
  let answer = 0;

  const [word1Len, word2Len] = [word1.length, word2.length];

  const word2Map = new Map();

  for (const word of word2) {
    if (word2Map.has(word)) word2Map.set(word, word2Map.get(word) + 1);
    else word2Map.set(word, 1);
  }

  for (let i = 0; i < word1Len - word2Len + 1; i++) {
    const copyMap = new Map(word2Map);

    let index = i;

    while (index < i + word2Len) {
      const element = word1[index];

      if (copyMap.has(element)) copyMap.set(element, copyMap.get(element) - 1);
      else break;

      if (copyMap.get(element) === 0) copyMap.delete(element);

      index++;
    }
    if (copyMap.size === 0) answer++;
  }

  return answer;
};

const testA = solutionA('bacaAacba', 'abc');
console.log(testA);
