/** 문제

* 일과를 마치고 돌아온 난쟁이가 일곱이 아닌 아홉 명이다.
* 일곱 난쟁이의 키가 주어질 때
* 백설공주와 함께 지내던 일곱 난쟁이를 출력

*/

/* SUDO
  1. 제외되는 두 명의 난쟁이를 기억할 변수를 선언한다. 
  2. Array.reduce 메소드를 이용해 아홉 난쟁이의 키의 합을 구한다.
  3. 아홉 난쟁이의 키의 합에서 100을 뺀다.
  4. 2중 반복문을 순회하면서
  4-1. i는 0부터 배열의 길이의 -1 만큼 순회하면서 난쟁이의 i번째 키를 기억한다.
  4-2. j는 i+1부터 배열의 길이만큼 순회하면서 난쟁이의 j번째 키를 기억한다.
  5. 난쟁이의 i번째와 j번째의 키가 2번에서 구한 값이랑 동일한 경우
  5-1. 1번의 변수에 두 명의 난쟁이를 할당하고 j 반복문을 종료한다.
  5-2. 만약 1번의 변수에 값이 있다면 i 반복문도 종료한다.
  6. Array.filter 메소드를 이용해 주어진 배열의 각각의 요소들이 제외되는 난쟁이에 포함되어 있지 않으면 return한다.
*/

const solutionA = (numArray) => {
  const excludes = [];

  const total = numArray.reduce((acc, cur) => acc + cur, 0);
  const sumheight = total - 100;

  for (let i = 0; i < numArray.length - 1; i++) {
    const iHeight = numArray[i];

    for (let j = 1; j < numArray.length; j++) {
      const jHeight = numArray[j];

      if (iHeight + jHeight === sumheight) {
        excludes.push(iHeight);
        excludes.push(jHeight);
        break;
      }
    }

    if (excludes.length) break;
  }

  return numArray.filter((el) => !excludes.includes(el));
};

const testA = solutionA([20, 7, 23, 19, 10, 15, 25, 8, 13]);
console.log(testA);
