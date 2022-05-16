/** 문제

https://programmers.co.kr/learn/courses/30/lessons/67256

*/

/* SUDO.1
  왼손과 현재번호, 오른손과 현재번호의 위치를 구하는게 이 문제의 핵심이였다.
  어떻게 구할까 하다, x축은 x축끼리 y축은 y축끼리 계산을 했지만 음수가 나오는 경우도 있었다.
  음수를 처리하기 위해서 Math.abs() 함수를 이용해서 절대값으로 변경해줬으며 결과값은 만족스러웠다.

  diff 함수
  1. left와 current, right를 받는다.
  2. 왼쪽과 현재의 거리를 구하고
  3. 오른쪽과 현재의 거리를 구하고
  4. 두 개의 거리가 같다면 'same'
  5. 오른쪽의 길이가 더 길 경우 'left'를, 왼쪽의 길이가 더 길 경우 'right'를 반환

  solutionA
  1. 핸드폰 keypad의 모양으로 객체를 선언한다. -> 각 번호의 좌표를 나타낸다.
  2. leftHand, rightHand 배열에 각각 손으로 누를 수 있는 번호를 저장
  3. 마지막 왼쪽으로 누른 번호, 마지막 오른쪽으로 누른 번호를 기억하기 위해 변수 2개 선언
  4. 주어진 numbers의 길이만큼 반복하면서 2번의 변수에 값이 있는 경우들은 answer에 'L' 또는 'R'을 저장 후 마지막으로 누른 번호를 변경
  5. 가운데 keypad를 누른 경우 keypad의 (마지막으로 누른 왼쪽 번호, 현재 번호, 마지막으로 누른 오른쪽 번호)를 인자로 넘겨준다.
  6. 5번에 대한 결과값이 'left' or 'right'일 경우 'L' 또는 'R'을 answer에 저장 후 마지막으로 누른 번호를 변경
  7. 같을 경우 주어진 hand에 따라 'left' or 'right'일 경우 'L' 또는 'R'을 answer에 저장 후 마지막으로 누른 번호를 변경
*/

const diff = (left, current, right) => {
  const leftDistance = Math.abs(left[0] - current[0]) + Math.abs(left[1] - current[1]);
  const rightDistance = Math.abs(right[0] - current[0]) + Math.abs(right[1] - current[1]);

  if (leftDistance === rightDistance) return 'same';

  return leftDistance < rightDistance ? 'left' : 'right';
};

function solutionA(numbers, hand) {
  let answer = '';

  const keypad = {
    1: [0, 0],
    2: [0, 1],
    3: [0, 2],
    4: [1, 0],
    5: [1, 1],
    6: [1, 2],
    7: [2, 0],
    8: [2, 1],
    9: [2, 2],
    '*': [3, 0],
    0: [3, 1],
    '#': [3, 2],
  };

  const leftHand = [1, 4, 7];
  const rightHand = [3, 6, 9];

  let lastLeftHand = '*';
  let lastRightHand = '#';

  for (const number of numbers) {
    if (leftHand.includes(number)) {
      answer += 'L';
      lastLeftHand = number;
    } else if (rightHand.includes(number)) {
      answer += 'R';
      lastRightHand = number;
    } else {
      const result = diff(keypad[lastLeftHand], keypad[number], keypad[lastRightHand]);

      if (result === 'left') {
        answer += 'L';
        lastLeftHand = number;
      } else if (result === 'right') {
        answer += 'R';
        lastRightHand = number;
      } else {
        if (hand === 'left') {
          answer += 'L';
          lastLeftHand = number;
        } else {
          answer += 'R';
          lastRightHand = number;
        }
      }
    }
  }

  return answer;
}

const numbers = [1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5];
const hand = 'right';

const testA = solutionA(numbers, hand);
console.log(testA);
