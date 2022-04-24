/**
 * 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 
 * ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램을 작성하세요.
 * 
 * 
 * 풀이 1
 * replace() 를 이용해서 A 를 # 으로 변경 해준다
 * 
 * 풀이 2
 * 반복문을 돌면서 A인 문자가 나올 때만 #으로 저장 해준다.
 */


//풀이1 정규식
function solution(str) {
    // gi 전체 에서 대소문자 상관없이
    return str.replace(/a/gi , () => {return '#'});
}

//풀이 2 반복문
function solution2(str) {
    let result = '';
    for(let i = 0; i < str.length; i++){
        if(str[i] === 'A'){
            result += '#';
        }else {
            result += str[i];
        }
    }
    return result;
}

let result = solution('BANANA');
console.log(result);
let result2 = solution2('BANANA');
console.log(result2);


