/** 문제

* 10진수 N이 입력되면 2진수로 변환하여 출력

*/

/* SUDO.1
  1. 재귀함수를 이용해서 요소가 0이면 리턴한다.
  2. 그렇지 않은 경우 요소를 2로 나눈 값을 재귀호출한다.
  3. answer변수에 2로 나눈 나머지 값을 저장한다.
*/

const solutionA = (decimal) => {
  let answer = '';

  const convert = (num) => {
    if (num === 0) return;
    else {
      convert(parseInt(num / 2));
      answer += num % 2;
    }
  };

  convert(decimal);

  return answer;
};

const testA = solutionA(11);
console.log(testA);
