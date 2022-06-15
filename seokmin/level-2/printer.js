/** 문제

https://programmers.co.kr/learn/courses/30/lessons/42587

*/

/* SUDO.1
  queue를 이용해서 문제를 해결한다.

  1. 주어진 priorities배열의 길이가 0이되면 while문을 종료한다.
  2. priorities배열의 첫번째 요소를 shift하고 count를 증가한다. -> 몇 번째로 출력되는지 알기위해서
  3. isCheck변수를 하나 지정하고 해당 요소가 나머지 요소보다 작은지 비교한다.
  4. 해당 요소가 나머지 요소보다 작다면 
  4.1 2번에서 shift한 값을 배열의 마지막에 넣고 
  4.2 isCheck를 true로 초기화하고
  4.3 count를 감소시킨다. -> shift하고 다시 push를 했기 때문에
  5. 만약 location이 0이고 isCheck가 false라면 count를 반환 -> 몇 번째로 출력됬는지 반환
  6. 그렇지 않은 경우 location을 감소시킨다.
  7. 만약 location이 0보다 작아질 경우 priorities의 길이 - 1로 초기화한다. -> shift하고 push를 했기에 출력되는 순서는 맨 마지막이 된다.
*/

const solutionA = (priorities, location) => {
  let count = 0;

  while (priorities.length > 0) {
    const firstEl = priorities.shift();
    count++;

    let isCheck = false;

    for (let priority of priorities) {
      if (firstEl < priority) {
        priorities.push(firstEl);
        isCheck = true;
        count--;
        break;
      }
    }

    if (location === 0 && !isCheck) return count;
    else location -= 1;

    if (location < 0) location = priorities.length - 1;
  }

  return count;
};

const testA = solutionA([1, 1, 9, 1, 1, 1], 0);
console.log(testA);
