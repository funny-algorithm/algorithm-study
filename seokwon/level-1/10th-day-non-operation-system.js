/**
 * 서울시는 6월 1일부터 교통 혼잡을 막기 위해서 자동차 10부제를 시행한다.
 *  자동차 10부제는 자동차 번호의 일의 자리 숫자와 날짜의 일의 자리 숫자가 일치하면 
 * 해당 자동차의 운행을 금 지하는 것이다. 
 * 예를 들어, 자동차 번호의 일의 자리 숫자가 7이면 7일, 17일, 27일에 운행하 지 못한다.
 *  또한, 자동차 번호의 일의 자리 숫자가 0이면 10일, 20일, 30일에 운행하지 못한 다.
 * 
 * 
 *  풀이 1
 *  정규식을 이용해서 일의 자리가 같은 것을 찾아낸다.
 * 
 *  풀이 2
 *  입력 받은 차량 번호를 순회하면서 일의 자리를 비교한다.
 */


// 정규식을 사용한 풀이
function solution(day, carNumber) {
    let count = 0;
    let regExp = new RegExp(`${day}$`, "g");
    for(let i = 0 ; i < carNumber.length; i++){
        if(String(carNumber[i]).match(regExp) !== null){
            count++;
        }
    }
    return count;
}

function solution2(day, carNumber) {
    let count = 0;
    for(let i = 0; i < carNumber.length; i++){
        if(String(carNumber[i]).slice(-1) === String(day)){
            count++;
        }
    }
    return count;
}

let result = solution(3, [25,23,11,47,53,17,33]);
let result2 = solution2(3, [25,23,11,47,53,17,33]);
console.log(result);
console.log(result2);