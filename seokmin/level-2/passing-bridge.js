/** 문제

https://school.programmers.co.kr/learn/courses/30/lessons/42583

*/

/* SUDO
  1. 다리의 길이만큼 새로운 배열을 만든 후
  2. 전체 무게를 구할 totalWeight을 선언한다.
  3. 1번에서 구한 배열의 길이가 유효할때까지 반복하면서
  4. 전체 무게에서 brdge의 첫 요소를 shift한다.
  5. 만약 트럭의 무게가 0보다 큰 경우의 조건과 (전체 무게 + truck_weights의 요소 <= weight)의 조건이 부합할때
  6. 1번 배열에 4번에서 shift한 요소를 push하고 전체 무게에 truck_weight의 요소를 더한다.
  7. answer를 1씩 증가시킨다.
*/

const solutionA = (bridge_length, weight, truck_weights) => {
  let answer = 0;

  let bridge = Array.from({ length: bridge_length }, () => 0);

  let totalWeight = 0;

  while (!!bridge.length) {
    totalWeight -= bridge.shift();

    if (truck_weights.length > 0) {
      let truck = truck_weights[0];

      if (totalWeight + truck <= weight) {
        bridge.push(truck_weights.shift());
        totalWeight += truck;
      } else bridge.push(0);
    }
    answer++;
  }

  return answer;
};

const testA = solutionA(2, 10, [7, 4, 5, 6]);
console.log(testA);
