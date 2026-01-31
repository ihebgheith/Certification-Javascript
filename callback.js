function direBonjour(nom, callback) {
  console.log("Bonjour " + nom);
  callback(); // on appelle la function reçue
}

function fin() {
  console.log("Au revoir !");
}

direBonjour("Alice", fin);