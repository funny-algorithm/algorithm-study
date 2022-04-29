// N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력
// 하는 프로그램을 작성하세요. 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다. 
// 만약 235 와 1234가 동시에 답이 될 수 있다면 1234를 답으로 출력해야 합니다.



// 입력받은 배열을 map을 이용해서 객체 형태로 반환해준다.
// 자리수의 합을 sum 이라는 키에 담아주고, 0번째 요소를 기본 max 값으로 넣어준다.
// 반복문을 돌면서 요소를 비교해주고, 최종 max의 origin을 돌려주면 최대값을 알 수 있다.

function solution(arr){
    let max = [];
    let transform = arr.map(item => {
        return {origin : item,sum :String(item).split('').reduce((acc, cur) => Number(acc) + Number(cur))}
    });
    
    max = transform[0];
    for(let i = 1; i < transform.length; i++){
        if(max.sum <= transform[i].sum){
            max = transform[i];
        }
    }
    
    return max.origin;
}


let res = solution([128,460,603,40,521,137,123]);
console.log(res);