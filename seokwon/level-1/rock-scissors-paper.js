    // 1 1 => D | 2 1 => 2 | 3 1 => 1
    // 1 2 => 2 | 2 2 => D | 2 3 => 3
    // 1 3 => 1 | 2 3 => 3 | 3 3 => D

function solution(A, B) {
    let caseObj = {
        '1 1' : 'D',
        '1 2' : 2,
        '1 3' : 1,
        '2 1' : 2,
        '2 2' : 'D',
        '2 3' : 3,
        '3 1' : 1,
        '3 2' : 3,
        '3 3' : 'D'
    }
    let result = [];
    for(let i = 0; i < A.length; i++){
        let userCase =  `${A[i]} ${B[i]}`;
        if(caseObj[userCase] === 'D'){
            result.push('D')
        }else if(A[i] === caseObj[userCase]) {
            result.push('A');
        }else if(B[i] === caseObj[userCase]){
            result.push('B');
        }
    }
    console.log(result);
}

solution([2,3,3,1,3], [1,1,2,2,3]);