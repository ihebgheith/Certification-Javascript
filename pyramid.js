function pyramid(chMotif, intLig, bool) {
    let resultat = "";

    if (bool) {
        // 🔺 pyramide centrée normale
        for (let i = 1; i <= intLig; i++) {
            let espaces = " ".repeat(intLig - i);
            let motif = (chMotif + " ").repeat(i);
            resultat += espaces + motif + "\n";
        }
    } else {
        // 🔻 pyramide centrée inversée
        for (let i = intLig; i >= 1; i--) {
            let espaces = " ".repeat(intLig - i);
            let motif = (chMotif + " ").repeat(i);
            resultat += espaces + motif + "\n";
        }
    }

    return resultat;
}

console.log(pyramid("o", 4, false));
console.log(pyramid("p", 5, true));
