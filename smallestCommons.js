//PPCM(a,b)=a*b/PGCD(a,b)

function smallestCommons(arr) {
// 1️⃣ Trier les nombres
  let [min, max] = arr.sort((a, b) => a - b);

  // 2️⃣ Fonction PGCD (Euclide)
  function pgcd(a, b) {
    return b === 0 ? a : pgcd(b, a % b);
  }
// 3️⃣ Fonction PPCM
  function ppcm(a, b) {
    return (a * b) / pgcd(a, b);
  }

   // 4️⃣ Calcul du PPCM de tout l’intervalle
  let result = min;

  for (let i = min + 1; i <= max; i++) {
    result = ppcm(result, i);
  }

  return result;
  
}
console.log(smallestCommons([1, 5]));
console.log(smallestCommons([5,1]));
console.log(smallestCommons([2, 10]));
console.log(smallestCommons([1, 13]));
console.log(smallestCommons([23, 18]));
