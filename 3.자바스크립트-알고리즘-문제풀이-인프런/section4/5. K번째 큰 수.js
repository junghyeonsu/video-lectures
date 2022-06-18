function solution(k, input) {
  const sums = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = i + 1; j < input.length; j++) {
      for (let z = j + 1; z < input.length; z++) {
        sums.push(input[i] + input[j] + input[z]);
      }
    }
  }
  return sums.sort((a, b) => b - a)[k - 1];
}

const input = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

console.log(solution(3, input));
