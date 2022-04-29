// 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출
// 력하는 프로그램을 작성하세요. 


function solution(str, c){
    // 거리를 저장할 배열
    let answer = [];
    // 문자열에서 c와 같을 때 새로운 반복문을 돌면서 거리를 구해서 최솟값을 거리로 저장한다.
    
    for(let i = 0; i < str.length; i++){
        if(str[i] === c){
            for(let j = 0; j < str.length; j++){
                if(answer[j] !== undefined){
                    answer[j] = Math.min(Math.abs(i - j), answer[j]);
                }else {
                    answer[j] = Math.abs(i - j);
                }
                
            }
        }
    }
    return answer;
}

let res = solution('teachermode', 'e')
console.log(res);