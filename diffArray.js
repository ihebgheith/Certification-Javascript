function diffArray(arr1, arr2) {
  const diff1 = arr1.filter((el) => !arr2.includes(el));
  const diff2 = arr2.filter((el) => !arr1.includes(el));
  return [...diff1, ...diff2];
}

console.log(
  diffArray(["diamond", "stick", "apple"], ["stick", "emerald", "bread"]),
);
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["andesite", "grass", "dirt", "dead shrub"],
  ),
);
console.log(diffArray(["pen", "book"], ["book", "pencil", "notebook"]));
console.log(
  diffArray(["car", "bike", "bus"], ["bike", "train", "plane", "bus"]),
);
console.log(diffArray([], ["apple", "banana"]));
console.log(diffArray(["apple", "banana"], []));
