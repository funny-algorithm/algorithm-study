/** 문제

* 1부터 100사이의 자연수가 적힌 N장의 카드를 가지고 있다.
* 같은 숫자의 카드가 여러장 있을 수 있으며 이 중 3장을 뽑아 각 카드에 적힌 수를 합한 값을 기록한다.
* 기록한 값 중 K번째로 큰 수를 출력

*/

/* SUDO.1
  1. Set메소드를 이용해 중복값을 제거한다.
  2. 3장을 뽑아 더한 값을 저장한다.
  3. 중복값을 제외한 배열을 내림차순으로 정렬하고 K - 1 번째의 요소를 반환한다.
*/

const solutionA = (numberArray, K) => {
  const setNumberArray = new Set();

  for (let i = 0; i < numberArray.length - 2; i++) {
    for (let j = i + 1; j < numberArray.length - 1; j++) {
      for (let k = j + 1; k < numberArray.length; k++) {
        const sum = numberArray[i] + numberArray[j] + numberArray[k];

        setNumberArray.add(sum);
      }
    }
  }

  const sortArray = [...setNumberArray].sort((a, b) => b - a);

  return sortArray[K - 1];
};

const testA = solutionA([13, 15, 34, 23, 45, 65, 33, 11, 26, 42], 3);
console.log(testA);
