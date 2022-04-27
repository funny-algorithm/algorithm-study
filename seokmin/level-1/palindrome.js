/** 문제

* 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 한다.
* 이때 알파벳만을 가지고 회문을 검사하며, 대소문자는 구분하지 않으며
* 문자열이 입력되면 해당 문자열이 팰린드롬이면 'YES', 아니면 'NO'를 출력

*/

/* SUDO.1
  1. 주어진 문자열에 대해서 알파벳만 저장한다.
  1.1 정규표현식 /[a-zA-Z]/
  2. 1번에서 구한 알파벳을 뒤집는다.
  2.1 split('').reverse().join('')
  3. 1번과 2번을 비교해서 같으면 'YES', 다르면 'NO'를 반환한다.
*/

const solutionA = (words) => {
  let filterWords = '';

  for (let i = 0; i < words.length; i++) {
    const checkAlphabet = /[a-zA-Z]/;

    if (checkAlphabet.test(words[i])) filterWords += words[i].toLowerCase();
  }

  const reverseWords = filterWords.split('').reverse().join('');

  return filterWords === reverseWords ? 'YES' : 'NO';
};

const testA = solutionA('found7, time: study; Yduts; emit, 7Dnuof');
console.log(testA);
