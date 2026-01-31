function getAverage(tableau) {
  let somme = 0;
  for (let i = 0; i < tableau.length; i++) {
    somme += tableau[i];
  }
  return somme / tableau.length; 
}

// Exemple d'utilisation
let monTableau = [1, 2, 3, 4, 5];
console.log(sommeTableau(monTableau)); // 15

function getGrade(note) {
  let note;
  let message;
  switch (true) {
    case (note = 100):
      message = "A+";
      break;
    case note >= 90 && note <= 99:
      message = "A";
      break;
    case note >= 80 && note <= 89:
      message = "B";
      break;
    case note >= 70 && note <= 79:
      message = "C";
      break;
    case note >= 60 && note <= 69:
      message = "D";
      break;
    case note >= 0 && note <= 59:
      message = "F";
      break;
  }
}
