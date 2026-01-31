
1️⃣ Créer un objet
a) Littéral (le plus courant)
const personne = {
  nom: "Alice",
  age: 25,
  saluer: function() {
    console.log(`Bonjour, je m'appelle ${this.nom}`);
  }
};

this fait référence à l’objet courant (personne ici).

Tu peux appeler la méthode avec : personne.saluer(); // Bonjour, je m'appelle Alice

b) Avec le constructeur new Object()
const voiture = new Object();
voiture.marque = "Toyota";
voiture.modele = "Corolla";

c) Avec une fonction constructeur
function Personne(nom, age) {
  this.nom = nom;
  this.age = age;
  this.saluer = function() {
    console.log(`Bonjour, je suis ${this.nom}`);
  };
}

const bob = new Personne("Bob", 30);
bob.saluer(); // Bonjour, je suis Bob

d) Avec Object.create()
const animal = {
  manger() {
    console.log("Miam miam");
  }
};

const chat = Object.create(animal);
chat.nom = "Félix";
chat.manger(); // Miam miam

2️⃣ Accéder aux propriétés

Avec un point :

console.log(personne.nom); // Alice


Avec des crochets :

console.log(personne["age"]); // 25


Utile si la clé est dynamique ou contient des caractères spéciaux.

3️⃣ Ajouter / modifier une propriété
personne.prenom = "Marie"; // Ajouter
personne.age = 26; // Modifier

4️⃣ Supprimer une propriété
delete personne.prenom;

5️⃣ Boucler sur un objet
for (let cle in personne) {
  console.log(cle, personne[cle]);
}

6️⃣ Méthodes d’objets utiles
Object.keys(personne);   // ["nom", "age", "saluer"]
Object.values(personne); // ["Alice", 26, f]
Object.entries(personne);// [["nom","Alice"], ["age",26], ["saluer", f]]

7 👉 Copier un objet sans le modifier : structuredClone(valeur)

const user = {
  name: "Alice",
  skills: ["JS", "HTML"]
};


const copy = structuredClone(user);
copy.skills.push("CSS");

console.log(user.skills); // ["JS", "HTML"]
console.log(copy.skills); // ["JS", "HTML", "CSS"]

