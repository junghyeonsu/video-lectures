function solution(input) {
  const splitInput = input.split('');
  let count = 1;
  let before = splitInput[0];
  let answer = '';

  for (let i = 1; i < splitInput.length; i++) {
    const current = splitInput[i];

    if (current === before) {
      count += 1;
    } else {
      answer += count === 1 ? before : `${before}${count}`;
      count = 1;
    }

    before = current;

    if (i === splitInput.length - 1) answer += count === 1 ? before : `${before}${count}`;
  }

  return answer;
}

const input = 'KKHSSSSSSSE';

console.log(solution(input));
