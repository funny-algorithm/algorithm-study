
function solution(s, t){
    let answer = 0;
    // t를 Map 에 저장해두고 
    let store = new Map();
    for(let c of t){
        if(store.has(c)){
            store.set(c, store.get(c) + 1);
        }else{
            store.set(c, 1);
        }
    }

    let start = 0, end = 0;
    let str = '';
    // s를 투포인터를 활용하여 순회하면서 길이가 3인 문자열을 만들어준다.
    while(end < s.length ){
        if(end - start > t.length - 1){
            start++;
            str = str.slice(1);
        }else {
            str += s[end++];
        }
        
        // 길이가 3일때 Map을 새로 복사해주고 
        if(str.length === 3){
            let copyStore = new Map(store);
            let flag = true;
            for(let c of str){
                if(copyStore.has(c)){
                    if(copyStore.get(c) === 0){
                        flag = false;
                        break;
                    }
                    copyStore.set(c, copyStore.get(c) - 1);
                }else{
                    flag = false;
                    break;
                }
            }
            // 반복문을 이상없이 통과했다면 카운팅
            if(flag){
                answer++;
            }
        }
    }
    return answer;
    
}


let res = solution('bacaAacba', 'abc');
console.log(res);