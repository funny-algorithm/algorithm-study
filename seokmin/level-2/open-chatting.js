/** 문제

https://school.programmers.co.kr/learn/courses/30/lessons/42888?language=javascript

*/

/* SUDO

  1. Map을 이용해서 문제를 해결한다.
  2. ' '으로 배열의 요소를 split하고 각각의 state, uid, name을 구한다.
  3. state가 Leave일 경우 answer에 [uid, '님이 나갔습니다.']를 push하고
  4. state가 Enter일 경우 answer에 [uid, '님이 들어왔습니다.']를 push한다.
  5. Map객체에 key = uid, value = name을 저장하고
  6. answer.map((ele) => `${recordMap.get(ele[0])}${ele[1]}`)를 리턴한다.
*/

const solutionA = (records) => {
  let answer = [];

  const recordMap = new Map();

  for (let record of records) {
    const [state, uid, name] = record.split(' ');

    if (state === 'Leave') answer.push([uid, '님이 나갔습니다.']);
    if (state === 'Enter') answer.push([uid, '님이 들어왔습니다.']);

    recordMap.set(uid, name);
  }

  return answer.map((ele) => `${recordMap.get(ele[0])}${ele[1]}`);
};

const record = [
  'Enter uid1234 Muzi',
  'Enter uid4567 Prodo',
  'Leave uid1234',
  'Enter uid1234 Prodo',
  'Change uid4567 Ryan',
];

const testA = solutionA(record);
console.log(testA);
