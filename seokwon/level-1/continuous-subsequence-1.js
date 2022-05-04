function solution(N, M, arr) {
    let answer = 0;
    let end = 0;
    for(let i = 0; i < N; i++){
        let sum = arr[i];
        
        while(end < N){
            if(i !== end){
                sum += arr[end];
            }
            if(sum < M){
                end++;
            }else if(sum === N){
                answer++;
                break;
            }
        }
    }
    return answer;
}



let res = solution(8,6, [2,2,1,3,1,1,1,2]);
console.log(res);