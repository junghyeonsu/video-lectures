function solution(input) {
  const sums = input.map(i => {
    return {
      value: i,
      sum: i
        .toString()
        .split('')
        .map(Number)
        .reduce((acc, cur) => acc + cur),
    };
  });

  const maxSum = Math.max(...sums.map(i => i.sum));
  return Math.max(...sums.filter(i => i.sum === maxSum).map(i => i.value));
}

const input = [128, 460, 603, 40, 521, 137, 123];

console.log(solution(input));
