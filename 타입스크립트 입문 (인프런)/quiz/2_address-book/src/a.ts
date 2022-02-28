function fetchItems(): string[] {
  return ['a', 'b', 'c'];
}

const result = fetchItems();
console.log(result);

// Promise<Unknown> => 프로미스로 받을 데이터를 Unknown에 넣어줌
function fetchItems2(): Promise<string[]> {
  return new Promise(resolve => resolve(['a', 'b', 'c']));
}

fetchItems2();
