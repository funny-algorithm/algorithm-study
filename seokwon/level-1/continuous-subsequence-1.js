function solution(N, M, arr) {
    let answer = [];
    for(let i = 0; i < N; i++){
        for(let j = i+ 1; j < N; j++){
            let copyArr = [...arr];
            let slice = copyArr.splice(i, j);
            let total = slice.reduce((acc, cur) => acc + cur)
            if(total === M){
                answer.push(slice);
            }
            
        }
    }
}



let res = solution(8,6, [1,2,1,3,1,1,1,2]);