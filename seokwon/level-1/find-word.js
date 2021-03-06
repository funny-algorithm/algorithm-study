/**
 * 한 개의 문자열을 입력받고, 특정 문자를 입력받아 
 * 해당 특정문자가 입력받은 문자열에 몇 개 존재하는지 알아내는 프로그램을 작성하세요.
 * 문자열의 길이는 100을 넘지 않습니다.
 * 
 * 풀이 1.
 * match() 함수를 이용해서 해당 하는 문자만 배열로 만든 후 배열의 length를 리턴 할 수 있다.
 * 
 * 풀이 2.
 * 반복문을 돌면서 일치하는 숫자를 카운팅해서 카운트를 리턴한다.
 */

function solution(str, word) {
    let regExp = new RegExp(`${word}`, "g");
    return str.match(regExp).length;   
}

function solution2(str, word) {
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i] === word){
            count++;
        }
    }
    return count;
}

let result = solution('COMPUTERPROGRAMMING', 'R');
console.log(result);

let result2 = solution2('COMPUTERPROGRAMMING', 'R');
console.log(result2);