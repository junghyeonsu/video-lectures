function solution(input) {
  let rowSumArr = new Array(input.length).fill(0);
  let colSumArr = new Array(input.length).fill(0);
  let diaSumArr = new Array(2).fill(0);

  for (let i = 0; i < input.length; i += 1) {
    for (let j = 0; j < input.length; j += 1) {
      const current = input[i][j];

      if (i === j) diaSumArr[0] += current; // 왼쪽 -> 오른쪽 대각선
      if (i + j === input.length) diaSumArr[1] += current; // 오른쪽 -> 왼쪽 대각선
      rowSumArr[i] += current;
      colSumArr[j] += current;
    }
  }

  return Math.max(...rowSumArr, ...colSumArr, ...diaSumArr);
}

const input = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];

console.log(solution(input));
