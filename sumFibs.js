/*What the function does
Takes a positive number as input
Generates Fibonacci numbers starting from 0 and 1
Adds only the odd Fibonacci numbers
Stops when Fibonacci numbers are greater than the given number
Returns the sum*/
function sumFibs(num) {
  let a = 0,
    b = 1,
    sum = 0;    
    while (a <= num) {  
        if (a % 2 !== 0) {
            sum += a;
        }
        [a, b] = [b, a + b];
    }
    return sum;
}

console.log(sumFibs(1)); // Returns 1
console.log(sumFibs(4)); // Returns 5
console.log(sumFibs(1000)); // Returns 1785
console.log(sumFibs(4000000)); // Returns 4613732
console.log(sumFibs(75024)); // Returns 60696
console.log(sumFibs(75025)); // Returns 135721  