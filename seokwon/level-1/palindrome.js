// 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
// 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력
// 하는 프로그램을 작성하세요.
// 단 회문을 검사할 때 대소문자를 구분하지 않습니다


function solution(str){
    let answer = true;
    // 대문자, 소문자중 하나로 통일을 시켜준후에 반복물은 돌면서 체크
    str = str.toLowerCase();
    
    for(let i = 0 ; i < str.length; i++){
        if(str[i] !== str[str.length -1 -i]){
            answer =false;
            break;
        }
    }
    return answer ? 'YES' : 'NO';
}

let res = solution('gooG');
console.log(res);