/*
    한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
    을 작성하세요.

    match() 를 이용해서 문자열에 대문자 찾아내고 length 리턴
    match는 해당 정규식이 맞는 요소들에 대해 배열로 리턴해줌
*/

function solution(str){
    return str.match(/[A-Z]/g).length
}

let result = solution('KoreaTimeGood');
console.log(result);