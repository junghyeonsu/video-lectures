function solution(input) {
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {
      const cur = input[i][j];

      if (j !== 0) {
        if (cur <= input[i][j - 1]) continue;
      }

      if (j !== input.length - 1) {
        if (cur <= input[i][j + 1]) continue;
      }

      if (i !== 0) {
        if (cur <= input[i - 1][j]) continue;
      }

      if (i !== input.length - 1) {
        if (cur <= input[i + 1][j]) continue;
      }

      answer += 1;
    }
  }

  return answer;
}

const input = [
  [5, 3, 7, 2, 3],
  [3, 7, 1, 6, 1],
  [7, 2, 5, 3, 4],
  [4, 3, 6, 4, 1],
  [8, 7, 3, 5, 2],
];

console.log(solution(input));
