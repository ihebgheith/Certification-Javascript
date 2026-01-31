
function dropElements(arr, func) {
  while (arr.length > 0 && !func(arr[0])) {
    arr.shift();
  } 
    return arr;
}

console.log(dropElements([1, 2, 3, 4], (n) => n >= 3)); // Returns [3, 4]
console.log(dropElements([0, 1, 0, 1], (n) => n === 1)); // Returns [1, 0, 1]
console.log(dropElements([1, 2, 3], (n) => n > 0)); // Returns [1, 2, 3]
console.log(dropElements([1, 2, 3, 4], (n) => n > 5)); // Returns []
console.log(dropElements([1, 2, 3, 7, 4], (n) => n > 3)); // Returns [7, 4]
console.log(dropElements([1, 2, 3, 9, 2], (n) => n > 2)); // Returns [3, 9, 2]
/*What the function does
Takes an array and a function as input
Removes elements from the beginning of the array until the function returns true for the first element
Returns the modified array*/