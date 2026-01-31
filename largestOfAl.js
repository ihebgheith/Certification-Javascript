
function largestOfAl(arr) {

    return arr.map(subArr => Math.max(...subArr));

   

}
 
//console.log(largestOfAl([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]])); // [5, 27, 39, 1001]
//console.log(largestOfAl([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])); // [25, 48, 21, -3]
//console.log(largestOfAl([[-1, -2, -3, -4], [-10, -20, -30, -5], [-100, -50, -75, -25]])); // [-1, -5, -25]
//console.log(largestOfAl([[0, 0, 0], [1, 1, 1], [2, 2, 2]])); // [0, 1, 2]

const nombres = [1, 2, 3, 4, 5];

const doubles = nombres.map(nombre => nombre * 2);
console.log(doubles);


