/** 문제

* N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력

*/

/* SUDO.1
  1. 해당 단어와 단어의 길이를 저장할 객체를 선언한 후 주어진 배열의 첫 번째 요소의 단어와 단어의 길이를 할당한다.
  2. i는 1부터 주어진 배열의 길이만큼 순회한다.
  3. 각각의 요소의 길이가 1번에서 저장된 단어의 길이보다 길다면 해당 단어와 단어의 길이를 재할당한다.
  4. 1번 객체의 단어를 return 한다.
*/

const solutionA = (wordArray) => {
  const answer = {
    word: wordArray[0],
    length: wordArray[0].length,
  };

  for (let i = 1; i < wordArray.length; i++) {
    const currentWord = wordArray[i];

    if (currentWord.length > answer.length) {
      answer.word = currentWord;
      answer.length = currentWord.length;
    }
  }

  return answer.word;
};

const testA = solutionA(['teacher', 'time', 'student', 'beautiful', 'good']);
console.log(testA);
