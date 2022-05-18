function solution(limit, arr) {
  const dp = Array.from({ length: limit + 1 }, () => 0);
  dp[0] = 0;

  for (let i = 0; i < arr.length; i++) {
    const [point, time] = arr[i];
    for (let j = time; j <= limit; j++) {
      dp[j] = Math.max(dp[j - time] + point, dp[j]);
    }
  }

  return dp[limit];
}

let arr = [
  [10, 5],
  [25, 12],
  [15, 8],
  [6, 3],
  [7, 4],
];
console.log(solution(20, arr));
