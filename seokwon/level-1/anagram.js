function solution(str1, str2){
    let store1 = new Map();
    let store2 = new Map();
    

    // 문자열 순회하면서 
    for(let i = 0; i < str1.length; i++){
        if(store1.has(str1[i])){
            store1.set(str1[i], store1.get(str1[i]) + 1);
        }else{
            store1.set(str1[i], 1);
        }

        if(store2.has(str2[i])){
            store2.set(str1[i], store2.get(str2[i]) + 1);
        }else{
            store2.set(str2[i], 1);
        }
    }

    
}

let res = solution('AbaAeCe', 'baeeACA');