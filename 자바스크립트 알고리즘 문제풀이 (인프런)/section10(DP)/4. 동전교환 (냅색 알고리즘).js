function solution(m, coins) {
  const dp = new Array(m + 1).fill(1000);
  dp[0] = 0;

  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j <= m; j++) {
      // j원을 거슬러 줄 수 있는 최소 동전 개수
      dp[j] = Math.min(dp[j - coins[i]] + 1, dp[j]);
    }
  }

  console.log(dp);
}

let arr = [1, 2, 5];
console.log(solution(15, arr));
