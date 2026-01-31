let array = [1, 2, 3];

// ==============================
// MÉTHODES DE TRANSFORMATION
// ==============================

console.group("🔹 Méthodes de transformation");

// map : crée un nouveau tableau en appliquant une fonction à chaque élément
console.log("map →", array.map(x => x * 2)); 
// [1,2,3] → [2,4,6]

// filter : retourne un nouveau tableau avec les éléments qui respectent la condition
console.log("filter →", array.filter(x => x % 2 === 0)); 
// garde uniquement les nombres pairs

// reduce : réduit le tableau à une seule valeur (accumulation)
console.log("reduce →", array.reduce((sum, x) => sum + x, 0)); 
// 0 + 1 + 2 + 3 = 6

// reduceRight : identique à reduce mais en partant de la droite
console.log("reduceRight →", array.reduceRight((sum, x) => sum + x, 0));

console.groupEnd();

// ==============================
// MÉTHODES DE RECHERCHE
// ==============================

console.group("🔹 Méthodes de recherche");

// find : retourne le premier élément qui respecte la condition
console.log("find →", array.find(x => x > 2)); 
// 3

// findIndex : retourne l’index du premier élément trouvé
console.log("findIndex →", array.findIndex(x => x > 2)); 
// index de 3 → 2

// some : retourne true si AU MOINS un élément respecte la condition
console.log("some →", array.some(x => x < 0)); 
// false

// every : retourne true si TOUS les éléments respectent la condition
console.log("every →", array.every(x => x > 0)); 
// true

// includes : vérifie si une valeur existe dans le tableau
console.log("includes →", array.includes(2)); 
// true

// indexOf : retourne l’index de la valeur (ou -1 si absente)
console.log("indexOf →", array.indexOf(2)); 
// 1

// lastIndexOf : dernier index trouvé (utile si doublons)
console.log("lastIndexOf →", array.lastIndexOf(2)); 
// 1

// at : permet d’accéder à un élément via index positif ou négatif
console.log("at →", array.at(-1)); 
// dernier élément → 3

console.groupEnd();

// ==============================
// COPIE / DÉCOUPAGE
// ==============================

console.group("🔹 Copie / découpage");

// slice : extrait une partie du tableau sans le modifier
console.log("slice →", array.slice(1, 3)); 
// [2,3]

// concat : fusionne des tableaux et retourne un nouveau
console.log("concat →", array.concat([4, 5])); 
// [1,2,3,4,5]

console.groupEnd();

// ==============================
// CONVERSION
// ==============================

console.group("🔹 Conversion");

// join : transforme le tableau en chaîne avec séparateur
console.log("join →", array.join("-")); 
// "1-2-3"

// toString : conversion simple en chaîne
console.log("toString →", array.toString()); 
// "1,2,3"

// toLocaleString : version localisée (dates, nombres)
console.log("toLocaleString →", array.toLocaleString());

console.groupEnd();

// ==============================
// TRI / INVERSION
// ==============================

console.group("🔹 Tri et inversion");

// sort : trie les éléments (copie ici pour éviter la mutation)
console.log("sort →", [...array].sort((a, b) => b - a)); 
// [3,2,1]

// reverse : inverse l’ordre des éléments
console.log("reverse →", [...array].reverse()); 
// [3,2,1]

console.groupEnd();

// ==============================
// MÉTHODES MUTABLES
// ==============================

console.group("⚠️ Méthodes mutables");

// push : ajoute un élément à la fin
let arr1 = [...array];
arr1.push(4);
console.log("push →", arr1);

// pop : supprime le dernier élément
arr1.pop();
console.log("pop →", arr1);

// shift : supprime le premier élément
let arr2 = [...array];
arr2.shift();
console.log("shift →", arr2);

// unshift : ajoute un élément au début
arr2.unshift(0);
console.log("unshift →", arr2);

// splice : supprime / remplace / ajoute des éléments
let arr3 = [...array];
arr3.splice(1, 1, 99); 
// remplace 2 par 99
console.log("splice →", arr3);

// fill : remplit une partie du tableau avec une valeur
let arr4 = [...array];
arr4.fill(0, 1, 3); 
// [1,0,0]
console.log("fill →", arr4);

// copyWithin : copie une partie du tableau vers une autre position
let arr5 = [1, 2, 3, 4];
arr5.copyWithin(0, 2); 
// copie [3,4] au début
console.log("copyWithin →", arr5);

console.groupEnd();

// ==============================
// TABLEAUX IMBRIQUÉS
// ==============================

console.group("🔹 Tableaux imbriqués");

// flat : aplatit les tableaux imbriqués
const nested = [1, [2, [3]]];
console.log("flat →", nested.flat(2)); 
// [1,2,3]

// flatMap : map + flat en une seule opération
console.log("flatMap →", array.flatMap(x => [x, x * 2]));

console.groupEnd();

// ==============================
// ITÉRATION
// ==============================

console.group("🔹 Itération");

// forEach : parcourt chaque élément (ne retourne rien)
array.forEach(x => { console.log("forEach →", x); });

console.groupEnd();

// ==============================
// CLÉS / VALEURS
// ==============================

console.group("🔹 Clés / valeurs");

// keys : retourne les indices
console.log("keys →", [...array.keys()]);

// values : retourne les valeurs
console.log("values →", [...array.values()]);

// entries : retourne [index, valeur]
console.log("entries →", [...array.entries()]);

console.groupEnd();


/*🔹 Transformation
map → transforme chaque élément et retourne un nouveau tableau
filter → garde les éléments qui respectent une condition
reduce → combine tous les éléments en une seule valeur
reduceRight → identique à reduce mais de droite à gauche

🔹 Recherche / Tests
find → retourne le premier élément qui respecte la condition
findIndex → retourne l’index du premier élément trouvé
some → true si au moins un élément respecte la condition
every → true si tous les éléments respectent la condition
includes → vérifie la présence d’une valeur
indexOf → retourne l’index de la valeur (ou -1)
lastIndexOf → retourne le dernier index trouvé
at → accède à un élément via index positif ou négatif

🔹 Copie / Découpage
slice → extrait une partie du tableau sans le modifier
concat → fusionne des tableaux et retourne un nouveau

🔹 Conversion
join → transforme le tableau en chaîne avec séparateur
toString → convertit le tableau en chaîne simple
toLocaleString → conversion en chaîne adaptée à la locale

🔹 Tri / Ordre
sort → trie les éléments du tableau (mutable)
reverse → inverse l’ordre des éléments (mutable)
⚠️ Méthodes mutables (modifient le tableau)
push → ajoute un élément à la fin
pop → supprime le dernier élément
shift → supprime le premier élément
unshift → ajoute un élément au début
splice → ajoute, supprime ou remplace des éléments
fill → remplit une partie du tableau avec une valeur
copyWithin → copie une portion du tableau ailleurs dans le même tableau

🔹 Tableaux imbriqués
flat → aplatit les tableaux imbriqués
flatMap → map suivi d’un flat en une seule opération

🔹 Itération
forEach → parcourt chaque élément sans retourner de valeur

🔹 Accès aux indices / valeurs
keys → retourne les indices du tableau
values → retourne les valeurs du tableau
entries → retourne des paires [index, valeur]    */