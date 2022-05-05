/** 문제

* 입력된 문자열에서 소괄호 () 사이에 존재하는 모든 문자를 제거하고 남은 문자만 출력

*/

/* SUDO.1
  1. 요소가 ) 이 아닐 경우에는 stack에 push
  2. 요소가 ( 일 경우에는 ( 가 나올때 까지 stack에서 pop
  3. 문자열을 출력해야하기 때문에 stack.join('')
*/

const solutionA = (str) => {
  const stack = [];

  for (const character of str) {
    if (character !== ')') stack.push(character);
    else {
      while (stack.pop() !== '(');
    }
  }

  return stack.join('');
};

const testA = solutionA('(A(BC)D)EF(G(H)(IJ)K)LM(N)');
console.log(testA);
