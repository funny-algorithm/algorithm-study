/*
    길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.

    두변의 길이의 합이 가장긴 변의 길이보다 크면 삼각형

    최대 값을 구하고, 입력받은 배열에서 최대값을 제거 해준후에 그 배열의 합과 최대 길이의 합을 비교해준다.
*/

function solution(a,b,c) {
    let inputNum = [a,b,c];
    const maxNum = Math.max(...inputNum);
    inputNum.splice(inputNum.indexOf(maxNum), 1);
    
    const others = inputNum.reduce((acc, cur) => acc + cur, 0);
    return maxNum < others ? 'YES' : 'NO';
    
}

let result = solution(6,7,11);
console.log(result);
let result2 = solution(13,33,17);
console.log(result2);