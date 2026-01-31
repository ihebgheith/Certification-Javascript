const user = {
  name: "Alice",
  age: 25,
  country: "France"
};

// Styles console
const titleStyle  = "color:#fff; background:#0ea5e9; padding:4px 8px; border-radius:4px; font-weight:bold";
const methodStyle = "color:#16a34a; font-weight:bold";
const resultStyle = "color:#0f172a";
const warningStyle = "color:#dc2626; font-weight:bold";

// ==============================
// LECTURE / ACCÈS
// ==============================

console.group("%c🔹 Lecture / Accès", titleStyle);

// Object.keys : retourne toutes les clés
console.log("%cObject.keys%c →", methodStyle, resultStyle, Object.keys(user));

// Object.values : retourne toutes les valeurs
console.log("%cObject.values%c →", methodStyle, resultStyle, Object.values(user));

// Object.entries : retourne les paires clé / valeur
console.log("%cObject.entries%c →", methodStyle, resultStyle, Object.entries(user));

// hasOwnProperty : vérifie si la propriété appartient à l’objet
console.log(
  "%chasOwnProperty%c →",
  methodStyle,
  resultStyle,
  user.hasOwnProperty("age")
);

// Object.hasOwn : version moderne
console.log(
  "%cObject.hasOwn%c →",
  methodStyle,
  resultStyle,
  Object.hasOwn(user, "email")
);

console.groupEnd();

// ==============================
// COPIE / FUSION
// ==============================

console.group("%c🔹 Copie / Fusion", titleStyle);

// Object.assign : fusionne des objets (mutation de la cible)
const userCopy1 = Object.assign({}, user);
console.log("%cObject.assign%c →", methodStyle, resultStyle, userCopy1);

// Spread operator : copie superficielle
const userCopy2 = { ...user };
console.log("%cSpread (...)%c →", methodStyle, resultStyle, userCopy2);

// structuredClone : copie profonde
const userDeepCopy = structuredClone(user);
console.log("%cstructuredClone%c →", methodStyle, resultStyle, userDeepCopy);

console.groupEnd();

// ==============================
// PROPRIÉTÉS / DESCRIPTEURS
// ==============================

console.group("%c🔹 Propriétés / Descripteurs", titleStyle);

// getOwnPropertyNames : clés énumérables + non énumérables
console.log(
  "%cgetOwnPropertyNames%c →",
  methodStyle,
  resultStyle,
  Object.getOwnPropertyNames(user)
);

// getOwnPropertyDescriptor : détails d’une propriété
console.log(
  "%cgetOwnPropertyDescriptor%c →",
  methodStyle,
  resultStyle,
  Object.getOwnPropertyDescriptor(user, "name")
);

console.groupEnd();

// ==============================
// PROTECTION / SÉCURITÉ
// ==============================

console.group("%c⚠️ Protection / Sécurité", titleStyle);

const securedUser = { ...user };

// freeze : empêche toute modification
Object.freeze(securedUser);
console.log("%cObject.freeze%c →", warningStyle, resultStyle, securedUser);

// isFrozen : vérifie si l’objet est gelé
console.log(
  "%cObject.isFrozen%c →",
  methodStyle,
  resultStyle,
  Object.isFrozen(securedUser)
);

// seal : empêche ajout / suppression
const sealedUser = { ...user };
Object.seal(sealedUser);
console.log("%cObject.seal%c →", warningStyle, resultStyle, sealedUser);

// preventExtensions : empêche l’ajout de nouvelles propriétés
const noExtend = { ...user };
Object.preventExtensions(noExtend);
console.log(
  "%cObject.isExtensible%c →",
  methodStyle,
  resultStyle,
  Object.isExtensible(noExtend)
);

console.groupEnd();

// ==============================
// PROTOTYPE
// ==============================

console.group("%c🔹 Prototype", titleStyle);

// Object.create : crée un objet avec prototype
const admin = Object.create(user);
admin.role = "admin";
console.log("%cObject.create%c →", methodStyle, resultStyle, admin);

// getPrototypeOf : récupère le prototype
console.log(
  "%cgetPrototypeOf%c →",
  methodStyle,
  resultStyle,
  Object.getPrototypeOf(admin)
);

console.groupEnd();

// ==============================
// CONVERSION JSON
// ==============================

console.group("%c🔹 Conversion JSON", titleStyle);

// stringify : objet → JSON
const json = JSON.stringify(user);
console.log("%cJSON.stringify%c →", methodStyle, resultStyle, json);

// parse : JSON → objet
console.log("%cJSON.parse%c →", methodStyle, resultStyle, JSON.parse(json));

console.groupEnd();

/*
🔹 Accès / Information
Object.keys(obj) → retourne un tableau contenant les clés de l’objet
Object.values(obj) → retourne un tableau contenant les valeurs
Object.entries(obj) → retourne un tableau de paires [clé, valeur]
Object.fromEntries() → transforme des paires [clé, valeur] en objet
obj.hasOwnProperty(key) → vérifie si la propriété appartient à l’objet
Object.hasOwn(obj, key) → version moderne de hasOwnProperty

🔹 Copie / Fusion
Object.assign(target, source) → copie des propriétés dans un objet cible
{ ...obj } → copie superficielle (spread operator)
structuredClone(obj) → copie profonde d’un objet (moderne)

🔹 Création / Prototype
Object.create(proto) → crée un objet avec un prototype donné
Object.getPrototypeOf(obj) → retourne le prototype de l’objet
Object.setPrototypeOf(obj, proto) → change le prototype (déconseillé)

🔹 Propriétés (descripteurs)
Object.getOwnPropertyNames(obj) → retourne toutes les propriétés (y compris non énumérables)
Object.getOwnPropertyDescriptor(obj, key) → retourne le descripteur d’une propriété
Object.defineProperty(obj, key, desc) → définit une propriété avec contrôle fin
Object.defineProperties(obj, descs) → définit plusieurs propriétés

🔹 Contrôle / Sécurité
Object.freeze(obj) → empêche toute modification de l’objet
Object.seal(obj) → empêche ajout/suppression de propriétés
Object.preventExtensions(obj) → empêche l’ajout de nouvelles propriétés
Object.isFrozen(obj) → vérifie si l’objet est gelé
Object.isSealed(obj) → vérifie si l’objet est scellé
Object.isExtensible(obj) → vérifie si l’objet est extensible

🔹 Comparaison
Object.is(a, b) → compare deux valeurs (plus précis que ===)

🔹 Conversion
JSON.stringify(obj) → convertit un objet en JSON
JSON.parse(json) → convertit du JSON en objet

🔹 Itération (via tableaux)
for...in → parcourt les clés énumérables (héritées incluses)
Object.keys().forEach() → itération sécurisée sur les clés
Object.entries().forEach() → itération clé / valeur
*/

