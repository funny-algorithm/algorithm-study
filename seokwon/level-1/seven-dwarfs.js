/**
 * 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다. 
 * 일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
 * 아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다.
 * 뛰어난 수학적 직관력을 가지고 있던 백설공주는, 다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
 * 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 * 
 * 
 *  풀이 전체 난쟁이들 키의 합을 구하고 
 *  난쟁이 둘씩 짝지어서 키합 - 둘 키 === 100 인 경우를 찾아내서 
 *  제외하고 리턴 해준다.
 */


function solution(dwarfs) {
    let totalH = dwarfs.reduce((acc, cur) => acc+ cur, 0);
    for(let i = 0; i < dwarfs.length; i++){
        for(let j = i+1; j < dwarfs.length; j++){
            if(totalH - (dwarfs[i] + dwarfs[j]) === 100){
                // j 부터 splice를 하는 이유는 i 인덱스가 j 보다 작기 때문에
                // i를 먼저 지우고, j를 지울경우 j가 원하는 값이 아니게 된다.
                dwarfs.splice(j, 1);
                dwarfs.splice(i, 1);
                break;
            }
        }
    }
    return dwarfs;
}

let result = solution([20, 7, 23, 19, 10, 15 ,25, 8 ,13]);
console.log(result);