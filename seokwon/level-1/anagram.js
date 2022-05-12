function solution(str1, str2){
    let store1 = new Map();
    let store2 = new Map();
    
    // 문자열 순회하면서  Map을 만들어 준다.
    for(let i = 0; i < str1.length; i++){
        if(store1.has(str1[i])){
            store1.set(str1[i], store1.get(str1[i]) + 1);
        }else{
            store1.set(str1[i], 1);
        }

        if(store2.has(str2[i])){
            store2.set(str2[i], store2.get(str2[i]) + 1);
        }else{
            store2.set(str2[i], 1);
        }
    }
    
    //만들어진 Map을 순회하면서 값을 비교해준다.
    let check = true;
    for(const [key, value] of store1){
        if(store2.has(key)){
            if(store2.get(key) !== value){
                check = false;
                break;
            }
        }else {
            check =false;
            break;
        }
    }
    return check ? 'YES' : 'NO';
}

let res = solution('abaCC', 'Caaab');
console.log(res);