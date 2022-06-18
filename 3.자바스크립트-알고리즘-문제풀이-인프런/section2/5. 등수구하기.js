function solution(input) {
  let arr = [];

  input.forEach((val, idx) => arr.push({ val, idx }));
  arr.sort((a, b) => b.val - a.val);
  arr.map((val, idx) => (val.rank = idx + 1));

  for (let i = 0; i < arr.length; i += 1) {
    if (i === 0) continue;

    if (arr[i].val === arr[i - 1].val) {
      arr[i].rank = arr[i - 1].rank;
    }
  }

  arr.sort((a, b) => a.idx - b.idx);
  return arr.map(val => val.rank).join(' ');
}

const input = [87, 89, 92, 100, 76];

console.log(solution(input));
