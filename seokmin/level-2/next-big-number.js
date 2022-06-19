/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12911

*/

/* SUDO.1

  1. 주어진 n에 대해서 2진수로 변환 후 1의 개수를 찾는다.
  2. 주어진 n에 1씩 더해서 2진수로 변환 후 1의 개수를 찾는다. -> while(true)
  3. 1번의 1의 개수와 2번의 1의 개수가 같다면 10진수로 변환한 다음 큰 수를 반환한다. -> parseInt(숫자, 2)
*/

const solutionA = (n) => {
  const convertNum = n.toString(2);

  const oneCount = [...convertNum].filter((result) => result === '1').length;

  let flag = true;

  while (flag) {
    n++;

    const nextConvertNum = n.toString(2);

    const nextOneCount = [...nextConvertNum].filter((result) => result === '1').length;

    if (oneCount === nextOneCount) {
      flag = false;

      return parseInt(nextConvertNum, 2);
    }
  }
};

const testA = solutionA('(())()');
console.log(testA);
