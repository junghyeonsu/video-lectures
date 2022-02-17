function solution(input) {
  const splited = input.split("");
  let answer = "";
  for (let i = 0; i < splited.length; i += 1) {
    answer += splited[i] === "A" ? "#" : splited[i];
  }
  return answer;
}

const input = "BANANA";

console.log(solution(input));
