function solution(str){
    let president = '';
    let max = 0;
    const ballotBox = new Map();

    for(let i = 0; i< str.length; i++){
        if(ballotBox.has(str[i])){
            ballotBox.set(str[i], ballotBox.get(str[i]) + 1);
        }else{
            ballotBox.set(str[i], 1);
        }
    }

    for(const [key, value] of ballotBox){
        if(value > max){
            max = value;
            president = key;
        }
    }
    return president;
}


let res = solution('BACBACCACCBDEDE');
console.log(res);