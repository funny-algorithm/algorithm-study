/*
    연필 1 다스는 12자루입니다. 
    학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수 를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

    학생수 / 12 를 했을때 올림한 결과 
*/

function solution(N) {
    return Math.ceil(N / 12);
}

let result = solution(178);
console.log(result);