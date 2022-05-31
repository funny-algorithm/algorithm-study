/** 문제

https://programmers.co.kr/learn/courses/30/lessons/82612

*/

/* SUDO.1
  1. price * 1, price * 2, price * 3 ... price * N
  2. 1번의 값을 answer에 저장하고 
  3. answer에서 가지고 있는 돈(money)를 뺀 값이 0과 같거나 작다면 0을 반환하고
  4. 아니면 answer에서 money를 뺀 값을 반환한다.
*/

const solutionA = (price, money, count) => {
  let answer = 0;
  
  for(let i = 1; i <= count; i++) {
      answer += price * i;
  }
  
  const remainder = answer - money;
  
  return remainder <= 0 ? 0 : remainder;
}

const testA = solutionA(3, 20, 4, 10);
console.log(testA);
