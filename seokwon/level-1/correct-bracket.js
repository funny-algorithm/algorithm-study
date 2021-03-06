function solution(s){
    const stack = [];

    for(let b of s){
        if(b === '('){
            stack.push('(');
        }else{
            if(stack.length === 0){
                return "NO";
            }
            stack.pop();
        }
    }

    return stack.length > 0 ? 'YES' : 'NO';
}

let res = solution('(()(()))(()');
console.log(res);