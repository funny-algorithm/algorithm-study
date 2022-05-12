function solution(n){
    
    let answer = [];
    let check = Array.from({length : n + 1} , () => 0);
    let arr = ["frodo", "fradi", "crodo"];
    
    console.log(check);
    function DFS(v){
        if(v === n +1){
            let temp = ""
            for(let i = 1; i <= n; i++){
                if(check[i] === 1){
                    temp += arr[i - 1] + " "
                }
            }
            if(temp.length > 1 )answer.push(temp.trim());
        }else {
            // 포함 시킬때
            check[v] = 1;
            DFS(v + 1);
            // 포함 시키지 않을 때
            check[v] = 0;
            DFS(v + 1);
        }
    }

    DFS(1);
    return answer;

}

let res = solution(3);
console.log(res);



