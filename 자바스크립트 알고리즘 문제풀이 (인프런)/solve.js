function solution(array) {
  const sum = array.reduce((acc, cur) => acc + cur);

  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array.length; j += 1) {
      if (i === j) continue;
      else if (sum - (array[i] + array[j]) === 100) {
        array.splice(i, 1);
        array.splice(j - 1, 1);
        return array.join(" ");
      }
    }
  }
}

const input = [20, 7, 23, 19, 10, 15, 25, 8, 13];

console.log(solution(input));
