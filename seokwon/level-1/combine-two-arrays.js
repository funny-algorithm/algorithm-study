// 오름차순으로 정렬이 된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 
// 프로그램을 작성하세요.


// 두배열 합치고 오름차순 정렬

function solution(arr1, arr2){
    return arr1.concat(arr2).sort((a, b) => a - b);
}


let res = solution([1,3,5], [2,3,6,7,9]);
console.log(res);