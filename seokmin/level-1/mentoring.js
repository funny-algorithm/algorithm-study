/** 문제

* 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 도입한다.
* 멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 수학공부를 도와준다.
* 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 결정한다.
* M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 출력

*/

/* SUDO.1
  만약 4명의 학생이 있다고 가정하면 (멘토, 멘티)의 경우의 수는 4x4 = 16 이다.
  1. 멘토와 멘티가 될 수 있는 경우의 수 만큼 반복문을 순회한다.
  1.1 i = 1; i <= 4  -> 1~4번 학생
  1.2 j = 1; j <= 4  -> 1~4번 학생

  2. 멘토보다 멘티의 index 번호가 뒤에 있다면 (멘토, 멘티) 짝을 이룰 수 있다.
  2.1 k = 0; k < 주어진 배열의 길이;
  2.2 z = 0; z < 학생 수;
  2.3 주어진 배열[k][z]가 i 즉, 해당 등수의 학생과 같을 경우에는 멘토의 index 번호를 저장.
  2.4 주어진 배열[k][z]가 j 즉, 해당 등수의 학생과 같을 경우에는 멘티의 index 번호를 저장.

  3. 멘티의 index가 멘토의 index보다 클 경우에는 count를 1 증가시킨다.
  4. count가 주어진 배열의 길이와 같을 경우에는 (멘토, 멘티)가 확정이기 때문에 answer를 1증가시킨다.

*/

const solutionA = (testResult) => {
  let answer = 0;

  const testResultLength = testResult.length;
  const firstElementLength = testResult[0].length;

  for (let i = 1; i <= firstElementLength; i++) {
    for (let j = 1; j <= firstElementLength; j++) {
      let count = 0;

      for (let k = 0; k < testResultLength; k++) {
        let mentorIndex = 0;
        let menteeIndex = 0;

        for (let z = 0; z < firstElementLength; z++) {
          if (testResult[k][z] === i) mentorIndex = z;
          if (testResult[k][z] === j) menteeIndex = z;
        }

        if (mentorIndex < menteeIndex) count++;
      }
      if (count === testResultLength) answer++;
    }
  }

  return answer;
};

const testA = solutionA([
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
]);
console.log(testA);
