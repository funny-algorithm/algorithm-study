/** 문제

* 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력

*/

/* SUDO.1
  1. 주어진 문자열을 순회하면서 -> 정방향
  1.1 각각의 요소와 주어진 text가 같다면 count를 0으로 초기화 시키고
  1.2 그렇지 않은 경우 count를 1씩 증가시킨다.
  1.3 각각의 요소와 text의 거리를 저장한다.
  
  2. 주어진 문자열을 순회하면서 -> 역방향
  2.1 각각의 요소와 주어진 text가 같다면 count를 0으로 초기화 시키고
  2.2 그렇지 않은 경우 count를 1씩 증가시킨다.
  2.3 answer의 i번째 요소와 count를 비교해서 더 적은 거리를 저장한다.
*/

const solutionA = (word, text) => {
  let answer = [];

  let count = 0;

  for (let chaaracter of word) {
    if (chaaracter === text) count = 0;
    else count++;

    answer.push(count);
  }

  count = 0;

  for (let i = word.length - 1; i >= 0; i--) {
    const element = word[i];

    if (element === text) count = 0;
    else count++;

    answer[i] = Math.min(answer[i], count);
  }

  return answer;
};

const testA = solutionA('teachermode', 'e');
console.log(testA);
