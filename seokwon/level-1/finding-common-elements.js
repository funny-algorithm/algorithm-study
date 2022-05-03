// A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로
// 그램을 작성하세요.


// filter() 와 sort() 를 이용해서 처리한다.

function solution(arr1, arr2){
    return arr1.filter(el => arr2.includes(el)).sort((a, b) => a - b);
}


let res = solution([1,3,9,5,2], [3,2,5,7,8]);
console.log(res);