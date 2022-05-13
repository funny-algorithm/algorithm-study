/** 문제

https://programmers.co.kr/learn/courses/30/lessons/81301

*/

/* SUDO.1
  1. zero ~ nine까지의 배열을 선언한다.
  2. new RegExp() 정규식을 이용해서 1번 배열의 각각의 요소가 주어진 s문자열에 있으면 해당 index로 바꾼다.
*/

const solutionA = (s) => {
  const words = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];

  let answer = s;

  for (let i = 0; i < words.length; i++) {
    const word = words[i];

    const reg = new RegExp(word, 'g');

    answer = answer.replace(reg, i);
  }

  return parseInt(answer);
};

const testA = solutionA('one4seveneight');
console.log(testA);
