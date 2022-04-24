/**
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 * 
 * reduce() 사용하거나 단순 탐색으로 해결 가능
 * 속도는 단순탐색이 빠름
 * 
 */


function solution(N) {
    let sum = 0;
    for(let i = 1; i <= N; i++){
        sum += i;
    }
    return sum;
}

let result = solution(6);
console.log(result);