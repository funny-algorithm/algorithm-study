function solution(n){
    
    function DFS(v){
        if(v === 0) {
            return;
        }else{
            
            DFS(parseInt(v / 2));   
            console.log(v % 2)
        }
    }
    
    DFS(n);
}


let res = solution(11);