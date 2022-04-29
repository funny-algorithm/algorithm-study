// 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 
// 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시
// 오. 단 반복횟수가 1인 경우 생략합니다



function solution(str){
    let result = '';
    let index = 0 ;
    
    // 마지막 문자에서 같은 경우가 계속 발생할 수 있으므로 조건에 없는 문자를 임의로 추가해준다.
    str = str + '#';
    
    while(1){
        let count = 0;
        //문자열을 돌면서 index번째와 같은 경우 count를 세주고
        for(let i = index; i < str.length; i++){
            if(str[index] === str[i]){
                count++;        
            }else {
                if(count > 1){
                    // count가 1보다 클 때는 문자와 count를 같이 저장해주고
                    result += str[index] + count;
                }else {
                    // 그렇지 않은경우는 문자만 저장해 준다.
                    result += str[index];
                }
                // 다른부분이 나왔을때 index값을 i로 변경해주고 for문을 종료시킨다.
                index = i;
                break;
            }
        }

        if(index === str.length - 1){
            // index와 
            break;
        }
    }
    return result;
}

let res = solution('KKHSSSSSSSE');
console.log(res);