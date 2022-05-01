/** 문제

* 선생님은 올해 졸업하는 반 학생들에게 졸업선물을 주려고 한다.
* 현재 예산으로 최대 몇 명의 학생에게 선물을 사줄 수 있는지 출력
* 선생님은 상품 하나를 50% 할인해서(반 가격) 살 수 있는 쿠폰을 가지고 있으며 배송비는 할인에 포함되지 않는다.
*/

/* SUDO.1
  1. 상품가격과 배송비에 대해 오름차순으로 정렬한다.
  2. 상품 하나를 50% 할인할 수 있기에 i반복에서 50% 할인한 가격을 구한다.
  3. i와 j가 같을 때를 제외하고 예산가격이 상품가격과 배송비를 더한것 보다 작으면 멈추고
  4. 같거나 예산이 더 클 경우 예산에서 상품비 + 배송비를 빼주고 count를 증가시킨다.
  */

const solutionA = (products, m) => {
  let answer = 0;

  products.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));

  for (let i = 0; i < products.length; i++) {
    let money = m - (products[i][0] / 2 + products[i][1]);

    let count = 1;

    for (let j = 0; j < products.length; j++) {
      if (i !== j) {
        const productPrice = products[j][0];
        const deliveryCharge = products[j][1];

        if (money < productPrice + deliveryCharge) break;
        if (money >= productPrice + deliveryCharge) {
          money -= productPrice + deliveryCharge;
          count++;
        }
      }
    }
    answer = Math.max(answer, count);
  }
  return answer;
};

const testA = solutionA(
  [
    [6, 6],
    [2, 2],
    [4, 3],
    [4, 5],
    [10, 3],
  ],
  28
);
console.log(testA);
