/*
    1일때만 점수가 카운팅 되고 
    연속으로 1이 나왔을때는 1의 점수가 1씩 증가한다.
    0 을 기준으로 자르고 입력받은 점수를 나눠주면 1만 존재하는 배열을 만들수 있다.
 */

function solution(arr) {
    
    // 점수가 1인 배열을 만들어준다.
    let correctArray = arr.join('').split('0').filter(score => score !== '');
    let total = 0;

    for(let i = 0; i < correctArray.length; i++){
        let sum = 0;
         for(let j = 0; j < correctArray[i].length; j++){
            sum += j + 1;
         }
         total += sum;
    }
    return total;
}

let result = solution([1,0,1,1,1,0,0,1,1,0]);

console.log(result);