function solution(input) {
  const combinations = [];
  let answer = 0;

  for (let i = 0; i < input[0].length; i++) {
    for (let j = i; j < input[0].length; j++) {
      if (i === j) continue;
      combinations.push({ mento: input[0][i], mentee: input[0][j] });
    }
  }

  for (let c = 0; c < combinations.length; c++) {
    if (isPossibleCouple(input, combinations[c])) answer += 1;
  }

  return answer;
}

function isPossibleCouple(input, combination) {
  for (let i = 1; i < input.length; i++) {
    for (let j = 0; j < input[0].length; j++) {
      for (let z = j; z < input[0].length; z++) {
        if (j === z) continue;
        if (input[i][j] === combination.mento && input[i][z] === combination.mentee && j < z) {
          console.log(input[i][j], input[i][z]);
          return true;
        }
      }
    }
  }
}

const input = [
  [3, 4, 1, 2],
  [4, 3, 2, 1],
  [3, 1, 4, 2],
];

console.log(solution(input));
