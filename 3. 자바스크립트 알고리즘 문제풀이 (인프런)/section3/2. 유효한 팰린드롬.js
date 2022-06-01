function solution(input) {
  const filterOnlyLowerCase = input.toLowerCase().replace(/[^a-z]/g, '');
  const answer = filterOnlyLowerCase.split('').reverse().join('') === filterOnlyLowerCase;
  return answer ? 'YES' : 'NO';
}

const input = 'found7, time: study; Yduts; emit, 7Dnuof';

console.log(solution(input));
