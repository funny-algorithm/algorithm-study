/** 문제

https://programmers.co.kr/learn/courses/30/lessons/68644

*/

/* SUDO.1
  1. 2중 반복문을 통해 numbers 배열의 모든 요소를 탐색한다.
  2. Set을 이용해 중복을 없앤다. 
  3. Set객체를 Array.from() 메소드를 이용해 배열로 변환후 오름차순으로 정렬한다.
*/

const solutionA = (numbers) => {
  const answer = new Set();

  for (let i = 0; i < numbers.length - 1; i++) {
    const Ielement = numbers[i];

    for (let j = i + 1; j < numbers.length; j++) {
      const Jelement = numbers[j];

      answer.add(Ielement + Jelement);
    }
  }

  return Array.from(answer).sort((a, b) => a - b);
};

const testA = solutionA([2, 1, 3, 4, 1]);
console.log(testA);
