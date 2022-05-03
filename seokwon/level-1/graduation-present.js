// 가격이 낮은 순으로 정렬을 한 후에 (최대 학생에게 선물을 해야하기 때문에)
// 낮은 값부터 순서대로 반값을 적용해서 더했을때, 입력받은 금액과 같은 값이 나오는 경우의 수를 체크한다.

function solution(N, M, infos) {
    let answer = 0;
    infos = infos.sort((a, b) => (a[0] + a[1]) - (b[0] + b[1]));
    let flag = false;
    
    for(let i = 0; i < N; i++){
        // 가격이 낮은 순서대로 반값을 만든 후에 합을 구한다.
        // 첫번째 값을 기준으로 남은 금액을 구하고 
        let remain = M - (infos[i][0] /2 + infos[i][1]);
        // 0 부터 도는 이유는 두번째 요소의 반값을 시작할때 도 첫번째 부터 돌면서 더해서 확인을 해줘야 하기 때문
        // 이때 i 와 j 가 같은경우는 빼줄 필요가 없다.이미 remain을 구하면서 i를 확인했기 때문
        // count를 1부터 시작한 이유는 이미 할인받은 자기 자신을 뺏기 때문
        let count = 1;
        for(let j = 0; j < N; j++){
            if(i !== j) {
                let sum = infos[j][0] + infos[j][1];
                remain -= sum;
                count++;
                if(remain === 0){
                    answer = count;
                    flag= true;
                    break;
                }   
            }
        }
        if(flag) break;
    }
    return answer;
}

let res = solution(5, 28, [[6, 6], [2, 2], [4, 3], [4, 5], [10, 3]]);
console.log(res);