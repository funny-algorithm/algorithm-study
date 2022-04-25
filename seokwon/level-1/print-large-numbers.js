/*
    N(1<=N<=100)개의 정수를 입력받아, 
    자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)

    첫번째 항목은 바로 답에 넣어두고 
    두번째 요소 부터 탐색하는데 그전 요소와 비교를 해서 값이 큰것만 넣어준다.
*/


function solution(arr) {
    let answer = [];
    answer.push(arr[0]);
    
    for(let i = 1; i < arr.length; i++){
        if(arr[i - 1] < arr[i]){
            answer.push(arr[i]);
        }
    }
    
    
    return answer;

}

let result = solution([7,3,9,5,6,12]);
console.log(result)