/**
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고,
 *  고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 * 
 *  7개의 자연수를 array에 담겨온다고 가정
 *  % 2 !== 0 을 활용하면 홀수만 판별 가능 
 *  
 * 
 */


/**
 * 
 * @param  N : 숫자 7개의  Array 
 */
function solution(N) {
    let minOddNum = 9999999;
    let oddSum = 0;

    for(let i = 0; i < N.length; i++){
        if(N[i] % 2 !== 0){
            oddSum += N[i];
            if(minOddNum > N[i]){
                minOddNum = N[i];
            }
        }
    }
    return [oddSum , minOddNum]
}



let result = solution([12,77,38,41,53,92,85]);
console.log(result);