function solution(N, M, arr) {
    let answer = 0;
    let end = 0;
    
    let sum = 0;
    // start pointer = i
    for(let i = 0; i < N; i++){
        while(end < N){
            // 두가지 포인터가 같아지면 합을 구할 필요가 없음
            if(i === end){
                sum = arr[i];
            //아닐 경우에는 end를 누적 시키면서 나아간다
            }else{
                sum += arr[end];
            }
            
            if(sum < M){
                end++;
            }else if(sum === M){
                answer++;
                sum -= arr[end];
                sum -= arr[i];
                break;
            }else if(sum > M){
                sum -= arr[end];
                sum -= arr[i]
                break;
            }
        }
        
    }
    return answer;
}



let res = solution(8,6, [1,2,1,3,1,1,1,2]);
console.log(res);