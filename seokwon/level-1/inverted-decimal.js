// N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하
// 는 프로그램을 작성하세요. 예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출
// 력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.


function isPrime(num){
    let isPrime = true;
    if(num === 0 || num === 1){
        return false;
    }
    for(let i = 2; i < Math.sqrt(num); i++){
        if(num % i === 0){
            isPrime = false;
            break;
        }
    }
    return isPrime;
}


function solution(arr){
    let answer = [];
    let reverseNum = arr.map(num => Number(String(num).split('').reverse().join('')));
    
    for(let i = 0; i < reverseNum.length; i++){
        let check = isPrime(reverseNum[i]);
        if(check){
            answer.push(reverseNum[i]);
        }
    }

    return answer;
}


let res = solution([32,55,62,20,250,370,200,30,100]);
console.log(res);