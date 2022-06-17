/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12909

*/

/* SUDO.1
  stack을 이용해서 문제를 해결한다.

  1. 주어진 s의 길이만큼 순회하면서 
  2. 길이가 1이면서 닫힌괄호인 경우 false를 반환
  3. 열린괄호면 stack에 push
  4. 닫힌괄호면 stack에서 pop
  5. 스택의 길이가 0이면 올바른 괄호 -> true 반환
  6. 스택의 길이가 0이 아니면 올바르지 않은 괄호 -> false 반환
*/

const solutionA = (s) => {
  const stack = [];

  for (let i = 0; i < s.length; i++) {
    if (s[0] === ')') return false;

    const element = s[i];

    if (element === '(') stack.push(element);
    else {
      stack.pop();
    }
  }

  return stack.length === 0 ? true : false;
};

const testA = solutionA('(())()');
console.log(testA);
