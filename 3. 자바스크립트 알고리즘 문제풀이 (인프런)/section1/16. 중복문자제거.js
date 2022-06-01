function solution(input) {
  const splited = input.split("");
  let map = new Map();

  for (let i = 0; i < splited.length; i += 1) {
    map.set(splited[i]);
  }

  return Array.from(map)
    .map((i) => i[0])
    .join("");
}

const input = "ksekkset";

console.log(solution(input));
