function solution(n){
    function DFS(v){
        if(v === 0) return;
        else{
            DFS(v-1);
            console.log(v);
        }
        
    }
    DFS(n);

}


let res = solution(3);