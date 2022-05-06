/** 문제

* 필수과목은 반드시 이수해야 하며, 그 순서도 정해져 있다.
* 만약 총 과목이 A, B, C, D, E, F, G가 있고, 여기서 필수과목이 CBA로 주어지면 필수과목은 C, B, A과목이며 이 순서대로 꼭 수업계획을 짜야 한다.
* 필수과목순서가 주어지면 현수가 짠 N개의 수업설계가 잘된 것이면 “YES", 잘못된 것이면 ”NO“를 출력

*/

/* SUDO.1
  1. 주어진 필수과목을 배열화 시킨다.
  2. 주어진 과목들을 순회하면서 1번에서 구한 배열에 요소가 포함되어있는지 확인 후 
  3. 포함되어있다면 answer에 저장한다.
  4. 필수과목과 answer를 비교해 같다면 'YES', 틀리면 'NO'를 반환한다.
*/

const solutionA = (compulsorySubjects, subjects) => {
  let answer = '';

  const compulsorySubjectsArray = compulsorySubjects.split('');

  for (const subject of subjects) {
    if (compulsorySubjectsArray.includes(subject)) answer += subject;
  }

  return compulsorySubjects === answer ? 'YES' : 'NO';
};

const testA = solutionA('CBA', 'CBDAGE');
console.log(testA);

/* SUDO.2
  1. 주어진 필수과목을 배열화 시킨다.
  2. 주어진 과목들을 순회하면서 1번에서 구한 배열에 요소가 포함되어있는지 확인 후 
  3. 포함되어있다면 현재 과목과 queue의 맨 앞의 요소를 비교한다.
  4. 만약 같지 않는다면 필수과목을 순서대로 이수하지 않은 것이므로 'NO'를 반환
  5. queue의 길이가 0보다 크면 'NO', 0이면 'YES'를 반환
*/

const solutionB = (compulsorySubjects, subjects) => {
  const queue = compulsorySubjects.split('');

  for (const subject of subjects) {
    if (queue.includes(subject)) {
      if (subject !== queue.shift()) return 'NO';
    }
  }

  return queue.length > 0 ? 'NO' : 'YES';
};

const testB = solutionB('CBA', 'CBDAGE');
console.log(testB);
