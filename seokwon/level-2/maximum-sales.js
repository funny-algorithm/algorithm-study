function solution(day, continues, arr){

    let start = 0, end = 0;
    let max = 0;
    let sum = 0;
    while(end < arr.length -1){
        if(end - start > continues - 1){
            sum -= arr[start++];
        }else {
            sum += arr[end++];
        }
        if(sum > max) max = sum;
    }
    return max;
}


let res = solution(10, 3, [12,15,11,20,25,10,20,19,13,15]);
console.log(res);


