/* 1부터 N까지 출력 */

const solutionA = (num) => {
  const answer = [];
  const recursion = (element) => {
    if (element === 0) return;
    else {
      recursion(element - 1);
      answer.push(element);
    }
  };

  recursion(num);
  return answer;
};

const testA = solutionA(5);
console.log(testA);

/* 팩토리얼

  0! -> 1
  n! -> n * (n-1)!

*/

const solutionB = (num) => {
  const factorial = (element) => {
    if (element === 0) return 1;

    return element * factorial(element - 1);
  };

  return factorial(num);
};
const testB = solutionB(5);
console.log(testB);

/* 피보나치

  F0 = 0
  F1 = 1
  Fn = F(n-1) + F(n-2)
  
*/

const solutionC = (num) => {
  const fibonacci = (element) => {
    if (element < 2) return element;

    return fibonacci(element - 1) + fibonacci(element - 2);
  };

  return fibonacci(num);
};
const testC = solutionC(5);
console.log(testC);
