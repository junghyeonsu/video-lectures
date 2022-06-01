function solution(K, input) {
  let max = 0;
  let sum = 0;
  for (let i = 0; i < K; i++) sum += input[i];

  for (let i = K; i < input.length; i++) {
    sum += input[i] - input[i - K];
    max = Math.max(max, sum);
  }

  return max;
}

const input = [12, 15, 11, 20, 25, 10, 20, 19, 13, 15];

console.log(solution(3, input));
