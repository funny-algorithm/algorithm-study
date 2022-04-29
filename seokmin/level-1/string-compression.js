/** 문제

* 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
* 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하여 출력
* 단, 반복횟수가 1인 경우 생략합니다.

*/

/* SUDO.1
  Map을 이용해서 푼다.
  1. 주어진 문자열을 순회하면서 Map 객체에 key값이 존재한다면 해당 key 값의 value의 값을 +1 해준다.
  2. 그렇지 않은 경우 해당 key값의 value를 1로 초기화한다.
  3. 같은 문자의 연속으로 반복된 수를 다 구했다면
  4. 해당 Map객체를 순회하면서 
  4.1 key를 answer변수에 할당하고
  4.2 value가 1이 아닌 경우에만 몇 번 반복되었는지 answer변수에 할당한다.
*/

const solutionA = (word) => {
  let answer = '';

  const wordMap = new Map();

  for (let character of word) {
    if (wordMap.has(character)) wordMap.set(character, wordMap.get(character) + 1);
    else wordMap.set(character, 1);
  }

  for (const [key, value] of wordMap) {
    answer += key;

    value !== 1 && (answer += value);
  }

  return answer;
};

const testA = solutionA('KKHSSSSSSSE');
console.log(testA);
