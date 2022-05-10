// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 
// 프로그램을 작성하세요.


// 두배열 합치고 오름차순 정렬

function solution(arr1, arr2){
    return arr1.concat(arr2).sort((a, b) => a - b);
}

function solution2(arr1, arr2){
    let answer = [];
    let n = arr1.length;
    let m = arr2.length;

    let p1 = p2 = 0;

    while(p1 < n && p2 < m){
        if(arr1[p1] <= arr2[p2]){
            answer.push(arr1[p1++]);
        }else{
            answer.push(arr2[p2++]);
        }
    }

    while(p1 < n) {
        answer.push(arr1[p1++]);
    }

    while(p2 < m ){
        answer.push(arr2[p2++]);
    }
    return answer;
}


console.time('res1');
let res = solution([1,3,5], [2,3,6,7,9]);
console.log(res);
console.timeEnd('res1');

console.time('res2');
let res2 = solution2([1,3,5], [2,3,6,7,9]);
console.log(res2);
console.timeEnd('res2');