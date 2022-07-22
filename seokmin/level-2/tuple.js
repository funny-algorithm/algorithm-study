/** 문제

https://school.programmers.co.kr/learn/courses/30/lessons/64065

*/

/* SUDO.1
  1. 주어진 문자열 s의 첫 {{와 마지막 }}를 제거한 후 '},{'로 split 한다. -> sArray
  2. sArry의 길이만큼 순회하면서 각 요소를 ','로 split한 결과를 result 변수에 할당한다.
  3. 각 요소의 길이를 오름차순으로 정렬하고 첫 번째 배열의 요소를 answer배열에 push한다.
  4. 오름차순으로 정렬된 배열의 길이만큼 순회하면서 
  5. 해당 배열의 각 요소들이 answer 배열에 있는지 없는지 확인 후 없다면 answer변수에 push한다.
*/

const solutionA = (s) => {
  const answer = [];
  const result = [];

  const sArray = s.replace('{{', '').replace('}}', '').split('},{');

  for (let value of sArray) result.push(value.split(','));

  const sortByResult = result.sort((a, b) => a.length - b.length);

  answer.push(sortByResult[0][0]);

  for (let i = 1; i < sortByResult.length; i++) {
    const currentValue = sortByResult[i];

    for (let j = 0; j < currentValue.length; j++) {
      if (!answer.includes(currentValue[j])) answer.push(currentValue[j]);
    }
  }

  return answer.map((v) => v * 1);
};

const testA = solutionA('{{1,2,3},{2,1},{1,2,4,3},{2}}');
console.log(testA);
