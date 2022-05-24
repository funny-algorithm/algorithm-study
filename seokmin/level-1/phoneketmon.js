/** 문제

https://programmers.co.kr/learn/courses/30/lessons/1845

*/

/* SUDO.1
  1. 중복된 포켓몬을 없애기 위해 Set 메소드를 사용한다.
  2. 가질 수 있는 포켓몬은 주어진 nums 길이의 / 2
  3. 중복 제거된 포켓몬 객체의 길이와 가질 수 있는 포켓몬이 같다면 가질 수 있는 포켓몬의 수를 반환
  4. 중복 제거된 포켓몬 객체의 길이보다 가질 수 있는 포켓몬이 더 크다면 중복 제거된 포켓몬의 길이를 반환
*/

const solutionA = (nums) => {
  const getPhoneketmon = nums.length / 2;

  const numsSet = new Set(nums);

  return numsSet.size >= getPhoneketmon ? getPhoneketmon : numsSet.size;
};

const testA = solutionA([3, 3, 3, 2, 2, 2]);
console.log(testA);
