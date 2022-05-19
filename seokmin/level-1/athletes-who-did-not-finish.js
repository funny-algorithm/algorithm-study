/** 문제

https://programmers.co.kr/learn/courses/30/lessons/42576

*/

/* SUDO.1
  1. Map 객체를 생성
  2. 참여자를 담은 배열을 순회하면서 Map객체에 저장한다.
  2.1 만약 저장된 값이 있다면 count를 1씩 증가시키고 없다면 1로 초기화한다.
  3. 완주자를 담은 배열을 순회하면서 Map객체에서 제거한다.
  3.1 Map객체에 값이 있다면 count를 1씩 감소시키고 없다면 Map객체에서 삭제한다.
  4. Map객체의 key를 이용해 배열을 만든 후 첫번째 요소를 리턴
*/

const solutionA = (participant, completion) => {
  const participantMap = new Map();

  for (let person of participant) {
    if (participantMap.has(person)) participantMap.set(person, participantMap.get(person) + 1);
    else participantMap.set(person, 1);
  }

  for (let person of completion) {
    if (participantMap.has(person)) participantMap.set(person, participantMap.get(person) - 1);

    if (participantMap.get(person) === 0) participantMap.delete(person);
  }

  return Array.from(participantMap.keys())[0];
};

const participant = ['marina', 'josipa', 'nikola', 'vinko', 'filipa'];
const completion = ['josipa', 'filipa', 'marina', 'nikola'];

const testA = solutionA(participant, completion);
console.log(testA);
