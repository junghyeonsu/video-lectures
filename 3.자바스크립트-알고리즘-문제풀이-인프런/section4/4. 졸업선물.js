function solution(n, m, input) {
  const sortedToSum = input.sort((a, b) => a[0] + a[1] - (b[0] + b[1]));
  const counts = [];

  for (let i = 0; i < n; i++) {
    let count = 0;
    let money = m;

    const couponAdaptSum = sortedToSum[i][0] / 2 + sortedToSum[i][1];
    if (money - couponAdaptSum >= 0) {
      count += 1;
      money -= couponAdaptSum;
    }

    for (let j = 0; j < n; j++) {
      if (i === j) continue;

      const sum = sortedToSum[j][0] + sortedToSum[j][1];
      if (money - sum >= 0) {
        count += 1;
        money -= sum;
      } else {
        break;
      }
    }
    counts.push(count);
  }

  return Math.max(...counts);
}

const input = [
  [6, 6],
  [2, 2],
  [4, 3],
  [4, 5],
  [10, 3],
];

console.log(solution(5, 28, input));
