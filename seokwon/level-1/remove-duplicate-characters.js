/*
    소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
    제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

    입력받은 문자열을 돌면서 새로운 문자열에 중복되지 않은 문자만 쌓아준다.

*/


function solution(str){
    let answer = '';
    for(let i = 0 ; i < str.length; i++){
        if(!answer.includes(str[i])){
            answer += str[i];
        }
    }
    return answer;

}

let result = solution('ksekkset');
console.log(result);