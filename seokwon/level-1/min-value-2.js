/**
 * 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요.
 * Math.min()
 */

/**
 * 
 * @param  N : 7개의 숫자가 array라고 가정 
 */
function solution(N) {
    return Math.min(...N);
}

let result = solution([5,3,7,11,2,15,7]);
console.log(result);