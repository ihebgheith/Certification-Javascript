function convertHTML(str) {
  //On declare une fonction appelée convertHTML
  const htmlEntities = {
    //Elle prend un paramètre str, qui est une chaîne de caractères
    "&": "&amp;", //Objectif : remplacer certains caractères spéciaux par leurs entités HTML
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;",
  };
  return str.replace(/[&<>"']/g, function (match) {
    //replace() parcourt la chaîne str et remplace ce qui correspond au pattern
    return htmlEntities[match]; //fonction callback qui retourne la valeur correspondante dans l'objet htmlEntities
  }); //On utilise match comme clé dans l’objet htmlEntities
}

console.log(convertHTML("Dolce & Gabbana")); // Returns: "Dolce &amp; Gabbana"
console.log(convertHTML("Hamburgers < Pizza < Tacos")); // Returns: "Hamburgers &lt; Pizza &lt; Tacos"
console.log(convertHTML("Sixty > twelve")); // Returns: "Sixty &gt; twelve"
console.log(convertHTML('Stuff in "quotation marks"')); // Returns: "Stuff in &quot;quotation marks&quot;"
console.log(convertHTML("Schindler's List")); // Returns: "Schindler&apos;s List"
console.log(convertHTML("<>")); // Returns: "&lt;&gt;"
console.log(convertHTML("abc")); // Returns: "abc"
