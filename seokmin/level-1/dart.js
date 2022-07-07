/** 문제

https://school.programmers.co.kr/learn/courses/30/lessons/17682

*/

/* SUDO.1
  1. 주어진 dartResult 길이만큼 순회하면서
  2. 현재 요소가 숫자인지 아닌지를 판단한다.
  3. 현재 요소가 숫자면 요소를 answer에 push 하는데
  3.1 10일 경우가 있으므로 10을 판단해준다. -> 현재 요소가 1이고 다음 요소가 0인 경우
  4. S, D, T, *, #에 대해 분기하고
  4.1 S, D, T일 경우 answer의 최근 요소에 1, 2, 3제곱을 해준다.
  4.2 *일 경우 answer의 최근 요소와 이전 요소에 제곱을 해주고 
  4.2 #일 경우 answer의 현재 요소에 -1을 곱한다.
  5. reduce를 이용해 answer의 값을 모두 더해준다.
*/

const solutionA = (dartResult) => {
  const answer = [];
  let result = 0;

  for (let i = 0; i < dartResult.length; i++) {
    const dart = dartResult[i];

    if (!isNaN(dart)) {
      if (dart == 1 && dartResult[i + 1] == 0) {
        result = 10;
        i++;
      } else result = parseInt(dart);
    }

    if (dart === 'S') answer.push(Math.pow(result, 1));
    else if (dart === 'D') answer.push(Math.pow(result, 2));
    else if (dart === 'T') answer.push(Math.pow(result, 3));
    else if (dart === '*') {
      answer[answer.length - 1] *= 2;
      answer[answer.length - 2] *= 2;
    } else if (dart === '#') answer[answer.length - 1] *= -1;
  }

  return answer.reduce((acc, cur) => acc + cur, 0);
};

const testA = solutionA('1S2D*3T');
console.log(testA);
