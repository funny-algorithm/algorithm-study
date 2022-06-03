/** 문제

https://programmers.co.kr/learn/courses/30/lessons/12901

*/

/* SUDO.1
  1. 일요일부터 토요일까지를 입력한 배열을 선언한다. -> SUN ~ SAT
  2. Date 객체를 사용해 2016-a-b일을 지정하고 
  3. getDay() 메소드를 이용해 day를 구한다.
  4. 1번 배열의 getDay() index의 요일을 반환한다.
*/

const solutionA = (a, b) => {
  const day = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

  const date = new Date(`2016-${a}-${b}`);

  return day[date.getDay()];
};

const testA = solutionA(5, 24);
console.log(testA);
