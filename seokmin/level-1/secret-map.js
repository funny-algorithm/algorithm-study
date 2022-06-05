/** 문제

https://programmers.co.kr/learn/courses/30/lessons/17681

*/

/* SUDO.1
  1. 주어진 arr1과 arr2의 요소들의 2진수를 구한다. -> toString(2);
  1.1 n의 길이까지 padStart를 통해 0으로 채워준다.
  2. 2중 반복문을 순회한다.
  3. i의 반복문에서는 arr1과 arr2에 대해 split한 결과를 저장하고
  4. j의 반복문에서는 arr1의 요소와 arr2의 요소를 확인한다.
  5. arr1의 요소와 arr2의 요소 중 1이 존재하면 #을, 존재하지 않는다면 공백을 저장한다.
*/

const convert = (n, arr1, arr2) => {
  const convertArr1 = [];
  const convertArr2 = [];

  for (let i = 0; i < n; i++) {
    convertArr1.push(arr1[i].toString(2).padStart(n, 0));
    convertArr2.push(arr2[i].toString(2).padStart(n, 0));
  }

  return [convertArr1, convertArr2];
};

const solutionA = (n, arr1, arr2) => {
  const answer = [];

  const [binary1, binary2] = convert(n, arr1, arr2);

  for (let i = 0; i < binary1.length; i++) {
    const splitBinary1 = [...binary1[i]];
    const splitBinary2 = [...binary2[i]];

    let temp = '';

    for (let j = 0; j < splitBinary1.length; j++) {
      const binary1Element = splitBinary1[j];
      const binary2Element = splitBinary2[j];

      if (binary1Element === '1' || binary2Element === '1') temp += '#';
      else temp += ' ';
    }

    answer.push(temp);
  }

  return answer;
};

const n = 5;
const arr1 = [9, 20, 28, 18, 11];
const arr2 = [30, 1, 21, 17, 28];

const testA = solutionA(5, 24);
console.log(testA);
