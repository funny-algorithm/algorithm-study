/** 문제

* 전위, 중위, 후위순회

*/

// 전위순회
const solutionA = (num) => {
  const search = (element) => {
    if (element > 7) return;

    console.log(element);
    search(element * 2);
    search(element * 2 + 1);
  };

  search(num);
};

const testA = solutionA(1);

// 중위순회
const solutionB = (num) => {
  const search = (element) => {
    if (element > 7) return;

    search(element * 2);
    console.log(element);
    search(element * 2 + 1);
  };

  search(num);
};

const testB = solutionB(1);

// 후위순회
const solutionC = (num) => {
  const search = (element) => {
    if (element > 7) return;

    search(element * 2);
    search(element * 2 + 1);
    console.log(element);
  };

  search(num);
};

const testC = solutionC(1);
