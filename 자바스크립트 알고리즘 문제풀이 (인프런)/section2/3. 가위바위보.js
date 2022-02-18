function solution(input, input2) {
  const answer = [];
  for (let i = 0; i < input.length; i += 1) {
    answer.push(rockSessiorPaper(input[i], input2[i]));
  }
  return answer.join('\n');
}

function rockSessiorPaper(person1, person2) {
  switch (person1) {
    case 1:
      if (person2 === 1) return 'D';
      if (person2 === 2) return 'B';
      if (person2 === 3) return 'A';
      break;
    case 2:
      if (person2 === 1) return 'A';
      if (person2 === 2) return 'D';
      if (person2 === 3) return 'B';
      break;
    case 3:
      if (person2 === 1) return 'B';
      if (person2 === 2) return 'A';
      if (person2 === 3) return 'D';
      break;
  }
}

const input = [2, 3, 3, 1, 3];
const input2 = [1, 1, 2, 2, 3];

console.log(solution(input, input2));
