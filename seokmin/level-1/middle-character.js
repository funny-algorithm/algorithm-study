/** 문제

* 소문자로 된 문자열이 입력되면 그 단어의 가운데 문자를 출력
* 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력

*/

/* SUDO.1
  1. 입력받은 문자열과 문자열의 길이가 홀수인지 짝수인지 저장할 객체를 선언한다.
  2. String.slice 메소드를 이용해서 문자열의 길이가 홀수라면, 해당 문자열을 2로 나눈 몫 - 1부터 몫 + 1 까지의 문자열을 return 한다.
  3. String.slice 메소드를 이용해서 문자열의 길이가 짝수라면, 해당 문자열을 2로 나눈 몫부터 몫 + 1 까지의 문자열을 return 한다.
*/

const solutionA = (word) => {
  const answer = {
    word,
    isEven: word.length % 2 === 0,
  };

  const quotient = Math.floor(answer.word.length / 2);

  return answer.isEven
    ? answer.word.slice(quotient - 1, quotient + 1)
    : answer.word.slice(quotient, quotient + 1);
};

const testA = solutionA('study');
console.log(testA);

const testB = solutionA('good');
console.log(testB);
