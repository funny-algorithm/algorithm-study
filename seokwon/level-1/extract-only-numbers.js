function solution(str) {
    let matchcase = str.match(/[0-9]/g);
    return Number(matchcase.join(''));

}

let result = solution('g0en2T0s8eSoft');
console.log(result);