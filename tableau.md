# 🟢 Méthodes et opérations sur les tableaux en JavaScript

## 1️⃣ Création d’un tableau
```javascript
const fruits = ["🍎 pomme", "🍌 banane", "🍒 cerise"];
const nombres = new Array(1, 2, 3);

 2️⃣ Accéder / modifier
console.log(fruits[0]); // 🍎 "pomme"
fruits[1] = "🍊 orange";   
console.log(fruits);    // ["🍎 pomme","🍊 orange","🍒 cerise"]
console.log(fruits.length); // 3

3️⃣ Ajouter / supprimer des éléments
➕ Ajouter à la fin : push

fruits.push("🥝 kiwi");
console.log(fruits); // ["🍎 pomme","🍊 orange","🍒 cerise","🥝 kiwi"]
➖ Supprimer à la fin : pop

fruits.pop();
console.log(fruits); // ["🍎 pomme","🍊 orange","🍒 cerise"]
➕ Ajouter au début : unshift

fruits.unshift("🍓 fraise");
console.log(fruits); // ["🍓 fraise","🍎 pomme","🍊 orange","🍒 cerise"]
➖ Supprimer au début : shift

fruits.shift();
console.log(fruits); // ["🍎 pomme","🍊 orange","🍒 cerise"]
🔄 Modifier au milieu / insérer : splice

fruits.splice(1, 1, "🍈 melon", "🍍 ananas");
console.log(fruits); // ["🍎 pomme","🍈 melon","🍍 ananas","🍒 cerise"]

4️⃣ Rechercher / tester
🔍 Chercher un index : indexOf / lastIndexOf

console.log(fruits.indexOf("🍈 melon"));   // 1
console.log([1,2,1].lastIndexOf(1));      // 2
✅ Vérifier si existe : includes

console.log(fruits.includes("🍒 cerise")); // true
🔎 Trouver élément / index avec condition : find / findIndex

console.log([1,2,3,4].find(n => n>2));      // 3
console.log([1,2,3,4].findIndex(n => n>2)); // 2

5️⃣ Parcourir les éléments
🔁 Boucle classique for

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// "🍎 pomme" "🍈 melon" "🍍 ananas" "🍒 cerise"
🔁 Boucle for...of

for (let f of fruits) {
  console.log(f);
}
// "🍎 pomme" "🍈 melon" "🍍 ananas" "🍒 cerise"
🔁 Boucle forEach

fruits.forEach(f => console.log(f));
// "🍎 pomme" "🍈 melon" "🍍 ananas" "🍒 cerise"

6️⃣ Transformer / filtrer
🎨 map → créer un nouveau tableau transformé

console.log([1,2,3].map(n => n*2)); // [2,4,6]
🧹 filter → filtrer selon condition

console.log([1,2,3,4].filter(n => n>2)); // [3,4]
➕ reduce → réduire en une seule valeur

console.log([1,2,3].reduce((acc,n)=>acc+n,0)); // 6
🔀 sort → trier

console.log([3,1,2].sort()); // [1,2,3]
🔄 reverse → inverser

console.log([1,2,3].reverse()); // [3,2,1]
➕ concat → fusionner

console.log([1,2].concat([3,4])); // [1,2,3,4]
✍️ join → transformer en chaîne

console.log([1,2,3].join("-")); // "1-2-3"
✂️ slice → copier une portion

console.log([1,2,3,4].slice(1,3)); // [2,3]
7️⃣ Autres utilitaires
📌 Vérifier si tableau : Array.isArray

console.log(Array.isArray(fruits)); // true
🔽 Aplatir un tableau imbriqué : flat

console.log([1,[2,3],[4,[5]]].flat(2)); // [1,2,3,4,5]
🖌️ Remplir : fill

console.log([1,2,3].fill(0,1,3)); // [1,0,0]
💡 Astuce pratique :

map, filter, reduce → ne modifient pas le tableau original.

splice → modifie le tableau original.

slice → crée un nouveau tableau.