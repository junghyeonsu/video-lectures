function solution(input) {
  let answer = 1;
  let big = input[0];
  for (let i = 1; i < input.length; i += 1) {
    if (input[i] > big) {
      answer += 1;
      big = input[i];
    }
  }
  return answer;
}

const input = [130, 135, 148, 140, 145, 150, 150, 153];

console.log(solution(input));
