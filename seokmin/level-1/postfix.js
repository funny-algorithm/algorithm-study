/** 문제

* 후위연산식이 주어지면 연산한 결과를 출력

*/

/* SUDO.1
  1. 사칙연산을 담은 symbol 배열을 선언한다.
  2. 주어진 문자열에 대해 반복하면서 해당 요소가 사칙연산이 아니면 stack에 저장한다.
  3. 해당 요소가 사칙연산이면 stack에서 연산할 2개의 값을 꺼낸다.
  4. 각각의 사칙연산에 맞게 계산한 후 stack에 다시 push 해준다.
  5. stack의 첫 번째 요소를 반환한다.
*/

const calculator = (symbol, left, right) => {
  switch (symbol) {
    case '+':
      return left + right;
    case '-':
      return left - right;
    case '*':
      return left * right;
    case '/':
      return left / right;
  }
};

const solutionA = (str) => {
  const symbol = ['+', '-', '*', '/'];

  const stack = [];

  for (const element of str) {
    if (!symbol.includes(element)) stack.push(parseInt(element));
    else {
      const rightElement = stack.pop();
      const leftelement = stack.pop();

      stack.push(calculator(element, leftelement, rightElement));
    }
  }

  return stack[0];
};

const testA = solutionA('352+*9-');
console.log(testA);
