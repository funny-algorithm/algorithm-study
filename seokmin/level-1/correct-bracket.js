/** 문제

* 괄호가 입력되면 올바른 괄호이면 “YES", 올바르지 않으면 ”NO"를 출력

*/

/* SUDO.1
  1. 주어진 괄호가 ( 일 때 stack에 push
  2. 주어진 괄호가 ) 일 때 stack의 길이가 0이면 올바른 괄호가 아니기 때문에 NO를 리턴
  3. 주어진 괄호가 ) 일 때 stack의 길이가 0보다 크면 stack에 pop -> 맨 마지막 요소 빼기
  4. stack의 길이가 0이면 올바른 괄호, 그렇지 않으면 올바르지 않은 괄호
*/

const solutionA = (brackets) => {
  const stack = [];

  for (const bracket of brackets) {
    if (bracket === '(') stack.push(bracket);
    else {
      if (stack.length === 0) return 'NO';
      stack.pop();
    }
  }

  return stack.length === 0 ? 'YES' : 'NO';
};

const testA = solutionA('(()(()))(()');
console.log(testA);
