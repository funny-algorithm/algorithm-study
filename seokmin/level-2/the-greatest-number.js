/** 문제

https://programmers.co.kr/learn/courses/30/lessons/42746

*/

/* SUDO.1

  1. 주어진 numbers에 대해 string으로 변환 -> map(result => result + '');
  2. sort메소드로 정렬을 하는데 (b + a) - (a + b) -> 즉 '303' - '330' 을 비교
  3. join으로 문자열로 변환시켜준다.
*/

const solutionA = (numbers) => {
  return numbers
    .map((result) => result + '')
    .sort((a, b) => b + a - (a + b))
    .join('');
};

const testA = solutionA([3, 30, 34, 5, 9]);
console.log(testA);
