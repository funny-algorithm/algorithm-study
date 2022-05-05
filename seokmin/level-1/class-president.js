/** 문제

* 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했다.
* 개표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력

*/

/* SUDO.1
  기본 Object를 이용해서 풀기
  1. A~E 후보를 객체에 저장한다.
  2. 주어진 문자열에 대해 순회하면서 각각의 기호를 count한다.
  3. 1번 객체를 순회하면서 가장 많은 투표를 받은 학생을 찾아낸다.
*/

const solutionA = (candidates) => {
  const students = {
    A: 0,
    B: 0,
    C: 0,
    D: 0,
    E: 0,
  };

  for (const candidate of candidates) {
    students[candidate] = students[candidate] + 1;
  }

  let winStudent = ['', 0];

  for (const student in students) {
    if (winStudent[1] < students[student]) {
      winStudent = [student, students[student]];
    }
  }

  return winStudent[0];
};

const testA = solutionA('BACBACCACCBDEDE');
console.log(testA);

/* SUDO.1
  Map을 이용해서 풀기
  1. new Map()을 선언한다.
  2.주어진 문자열을 순회하면서 Map객채에 key값(기호)가 존재하면 value를 1증가
  2.1 Map객체에 key값이 존재하지 않는다면 value를 1로 초기화
*/

const solutionB = (candidates) => {
  const studentsMap = new Map();

  for (const candidate of candidates) {
    if (studentsMap.has(candidate)) studentsMap.set(candidate, studentsMap.get(candidate) + 1);
    else studentsMap.set(candidate, 1);
  }

  let winStudent = ['', 0];

  for (let [key, value] of studentsMap) {
    if (winStudent[1] < value) {
      winStudent = [key, value];
    }
  }

  return winStudent[0];
};

const testB = solutionB('BACBACCACCBDEDE');
console.log(testB);
