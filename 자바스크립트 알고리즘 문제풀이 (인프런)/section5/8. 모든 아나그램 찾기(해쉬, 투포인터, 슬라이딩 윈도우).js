function solution(s, t) {
  const tMap = new Map();

  for (let i = 0; i < t.length; i++) {
    if (tMap.get(t[i])) tMap.set(t[i], tMap.get(t[i]));
    else tMap.set(t[i], 1);
  }

  const sMap = new Map();

  for (let i = 0; i < t.length - 1; i++) {
    sMap.set(s[i], 1);
  }

  let left = 0;
  let answer = 0;

  for (let right = t.length - 1; right < s.length; right++) {
    if (sMap.get(s[right])) sMap.set(s[right], sMap.get(s[right]) + 1);
    else sMap.set(s[right], 1);

    if (isSameMap(sMap, tMap)) answer += 1;

    if (sMap.get(s[left]) === 1) sMap.delete(s[left]);
    else sMap.set(s[left], sMap.get(s[left]) - 1);

    left += 1;
  }

  return answer;
}

function isSameMap(map1, map2) {
  for (let [key, val] of map1) {
    if (!map2.has(key) || map2.get(key) !== val) return false;
  }

  return true;
}

let a = 'bacaAacba';
let b = 'abc';
console.log(solution(a, b));
