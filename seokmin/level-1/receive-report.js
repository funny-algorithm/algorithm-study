/** 문제

https://programmers.co.kr/learn/courses/30/lessons/92334

*/

/* SUDO.1
  1. users객체를 만들고 [count, []]로 초기화한다.
  2. 문제에서 각 유저는 한 번에 한 명의 유저를 신고할 수 있기 때문에 Set을 이용해 중복을 없애준다.
  3. 2번에서 구한 배열을 순회하면서 신고자와 신고당한자를 나누고 1번에서 구한 users객체에 대입해 값을 할당한다.
  3.1 users객체에 첫 번째 = count 증가, users객체에 두 번째 = 신고당한자
  4. k번 이상 신고당한 사람을 걸러준다.
  5. users객체를 순회하면서 두 번째 요소가 4번에서 구한 값에 포함된다면 filter로 걸러준 후 해당 배열의 길이를 answer에 push한다.
*/

const solutionA = (id_list, report, k) => {
  const answer = [];

  const users = {};

  for (let user of id_list) users[user] = [0, []];

  const setReport = new Set(report);

  setReport.forEach((result) => {
    const [A, B] = result.split(' ');

    users[A][1].push(B);
    users[B][0]++;
  });

  const getMailUser = id_list.filter((user) => users[user][0] >= k);

  for (const [key, value] of Object.entries(users)) {
    const count = value[1].filter((reportedPerson) => getMailUser.includes(reportedPerson)).length;

    answer.push(count);
  }

  return answer;
};

const id_list = ['muzi', 'frodo', 'apeach', 'neo'];
const report = ['muzi frodo', 'apeach frodo', 'frodo neo', 'muzi neo', 'apeach muzi'];

const testA = solutionA(id_list, report, 2);
console.log(testA);
