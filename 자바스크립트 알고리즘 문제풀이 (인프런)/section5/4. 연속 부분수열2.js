function solution(input) {
  const [n, m] = [5, 5];
  let left = 0;
  let count = 0;
  let sum = 0;

  for (let right = 0; right < n; right++) {
    sum += input[right];

    while (sum > m) {
      sum -= input[left++];
    }

    count += right - left + 1;
  }

  return count;
}

const input = [1, 3, 1, 2, 3];

console.log(solution(input));
