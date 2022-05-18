/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12977

*/

/* SUDO.1
  소수 판별
  1. 1보다 같거나 작으면 소수가 아니다.
  2. 2로 나누어 떨어지는 수 중 2는 소수 나머지는 소수가 아니다.
  3. 주어진 num의 제곱근이 3, 5 ... 홀수로 나눠진다면 소수가 아니다.

  솔루션
  1. 문제에서 3개의 수를 더했을 때를 가정했기에 3중 반복문 순회
  2. i는 0부터, j는 i+1부터, k는 j+1부터 시작
  3. nums의 i, j, k를 더한 수가 소수인지 아닌지 판별 후 맞다면 count 증가
*/

const isPrime = (num) => {
  if (num <= 1) return false;
  else if (num % 2 === 0) return num === 2 ? true : false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) return false;
  }

  return true;
};

const solutionA = (nums) => {
  let answer = 0;

  for (let i = 0; i < nums.length - 2; i++) {
    const first = nums[i];

    for (let j = i + 1; j < nums.length - 1; j++) {
      const second = nums[j];

      for (let k = j + 1; k < nums.length; k++) {
        const third = nums[k];

        const sum = first + second + third;

        isPrime(sum) && answer++;
      }
    }
  }

  return answer;
};

const nums = [1, 2, 7, 6, 4];
const testA = solutionA(nums);
console.log(testA);
