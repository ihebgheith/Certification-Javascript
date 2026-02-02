function steamrollArray(arr) {
  let result = [];

  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(steamrollArray(el));
    } else {
      result.push(el);
    }
  }

  return result;
}
console.log(steamrollArray([[["a"]], [["b"]]]))
console.log(steamrollArray([1, [2], [3, [[4]]]]))
console.log(steamrollArray([1, [], [3, [[4]]]]))
console.log(steamrollArray([1, {}, [3, [[4]]]]))