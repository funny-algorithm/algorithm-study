/** 문제

* 여러 개의 쇠막대기를 레이저로 절단하려고 한다.
* 1. 레이저는 여는 괄호와 닫는 괄호의 인접한 쌍 ‘( )’ 으로 표현된다. 또한, 모든 ‘( ) ’는 반드시 레이저를 표현한다.
* 2. 쇠막대기의 왼쪽 끝은 여는 괄호 ‘(’ 로, 오른쪽 끝은 닫힌 괄호 ‘)’ 로 표현된다.
* 쇠막대기와 레이저의 배치를 나타내는 괄호 표현이 주어졌을 때, 잘려진 쇠막대기 조각의 총 개수를 출력

*/

/* SUDO.1
  1. 주어진 문자열을 순회하면서 '(' 모양의 괄호면 stack에 push한다.
  2. 만약 '('이 아니고 ')'이면 2가지의 경우의 수를 따져본다.
  3. 만약 이전의 괄호가 '('인 경우
  3.1 레이저이기 때문에 stack에서 마지막 괄호를 지우고 stack의 길이를 answer에 더한다.
  4. 만약 이전의 괄호가 ')'인 경우
  4.1 마지막 막대이기 때문에 stack에서 마지막 괄호를 지우고 answer에 1을 더한다.
*/

const solutionA = (str) => {
  let answer = 0;

  const stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') stack.push(str[i]);
    else {
      stack.pop();
      if (str[i - 1] === '(') answer += stack.length;
      else answer += 1;
    }
  }

  return answer;
};

const testA = solutionA('(((()(()()))(())()))(()())');
console.log(testA);
