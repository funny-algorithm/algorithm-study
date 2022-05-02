// 현수네 반 선생님은 반 학생들의 수학점수를 향상시키기 위해 멘토링 시스템을 만들려고 합니다.
//  멘토링은 멘토(도와주는 학생)와 멘티(도움을 받는 학생)가 한 짝이 되어 멘토가 멘티의 
// 수학공부를 도와주는 것입니다. 
// 선생님은 M번의 수학테스트 등수를 가지고 멘토와 멘티를 정합니다. 
// 만약 A학생이 멘토이고, B학생이 멘티가 되는 짝이 되었다면, A학생은 M번의 수학테스트에서 
// 모두 B학생보다 등수가 앞서야 합니다. 
// M번의 수학성적이 주어지면 멘토와 멘티가 되는 짝을 만들 수 있는 경우가 총 몇 가지 인지 
// 출력하는 프로그램을 작성하세요


// 학생별로 누가 이겼는지 확인 해 줄 수 있는 객체배열을 하나 만들어둔다.
// 학생을 기준으로 우측에 있는 학생은 다 자신보다 등수 가 낮은것 이므로 멘티로 지정 될 수 있다.

function solution(arr) {
    let transform = [];
    // 학생 데이터를 가공시켜준다.
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (i === 0) {
                transform.push({ mentor: arr[i][j], mentees: arr[i].slice(j + 1) })
            } else {
                for (let x = 0; x < transform.length; x++) {
                    if (transform[x].mentor === arr[i][j]) {
                        transform[x].mentees = [...new Set([...transform[x].mentees, ...arr[i].slice(j + 1)])]
                    }
                }
            }
        }
    }

    for (let i = 0; i < transform.length; i++) {
        for (let j = i + 1; j < transform.length; j++) {
            let nextMentees = transform[j].mentees;
            let nextMentor = transform[j].mentor;
            let prevMentees = transform[i].mentees;
            let prevMentor = transform[i].mentor;

            // 서로 포함하고 있는 경우는 멘토가 될 수 없기 때문에 해당 학생을 지워준다.
            if (nextMentees.includes(prevMentor) && prevMentees.includes(nextMentor)) {
                nextMentees.splice(nextMentees.indexOf(prevMentor), 1);
                prevMentees.splice(prevMentees.indexOf(nextMentor), 1);

            }
        }
    }
    let pairCase = 0;
    transform.forEach(c => {
        pairCase += c.mentees.length;
    })
    return pairCase;
}

let res = solution([[3, 4, 1, 2], [4, 3, 2, 1], [3, 1, 4, 2]]);
console.log(res);