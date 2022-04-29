/**
    풀이 방법
        전체 탐색을 하면서  상하좌우 와 값을 비교한다.
        탐색 제외 조건
            - 첫번째 row 는 상을 확인할 필요가 없다
            - 마지막 row는 하를 확인할 필요가 없다
            - 첫번재 colum은 좌를 확인할 필요가 없다
            - 마지막 column은 우를 확인할 필요가 없다.
            
        위쪽 좌표 : arr[i-1][j] [-1, 0]
        오른쪽 좌표 : arr[i][j+1] [0, 1]
        아래쪽 좌표 : arr[i+1][j] [1, 0]
        왼족 좌표 : arr[i][j-1] [0, -1]
        해당 좌표에서 4번 확인해준다.

 */

function solution(arr) {
    let position = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    let cnt = 0;
    for(let i = 0; i <arr.length; i++){
        for(let j = 0; j < arr.length; j++){
            let flag = true;
            for(let x = 0; x < position.length; x++){
                if(arr[i + position[x][0]] && arr[i + position[x][0]][j + position[x][1]]){
                    if(arr[i][j] < arr[i + position[x][0]][j + position[x][1]]){
                        flag = false;
                        break;
                    }
                }    
            }
            if(flag){
                cnt++;
            }
        }
    }
    return cnt;
}

let result = solution([
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
]);

console.log(result);