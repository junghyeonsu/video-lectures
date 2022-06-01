function solution(input) {
  const lowerCases = input.split('').map(i => i.toLowerCase());
  const stringLength = lowerCases.length;

  for (let i = 0; i < stringLength / 2; i++) {
    if (lowerCases[i] === lowerCases[stringLength - 1 - i]) continue;
    else return 'NO';
  }

  return 'YES';
}

const input = 'agooGa';

console.log(solution(input));
