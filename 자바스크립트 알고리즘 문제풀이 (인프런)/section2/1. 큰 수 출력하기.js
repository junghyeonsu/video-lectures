function solution(input) {
  return input
    .map((value, index, arr) => {
      if (index === 0) return value;
      else if (arr[index - 1] < value) return value;
    })
    .filter((value) => value)
    .join(" ");
}

const input = [7, 3, 9, 5, 6, 12];

console.log(solution(input));
