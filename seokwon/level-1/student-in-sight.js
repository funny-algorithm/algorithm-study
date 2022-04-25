/*
    선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다. 
    일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때,
     맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요.
      (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)

      단순 탐색
*/

function solution(arr) {
    let answer = 0;
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] < arr[i + 1] && arr[i + 1] !== undefined ){
            answer++;
        }
    }
    return answer;
}


let result= solution([130, 135, 148, 140, 145, 150, 150, 153]);
console.log(result);