const buttons = document.querySelectorAll(".favorite-icon");

buttons.forEach(function (button) {
  button.addEventListener("click", function () {

    // Si le bouton contient la classe "filled"
    if (button.classList.contains("filled")) {
      button.classList.remove("filled");   // Supprime la classe
      button.innerHTML = "&#9825;";        // Reviens au cœur vide ♡
    } else {
      // Sinon (pas de classe "filled")
      button.classList.add("filled");      // Ajoute la classe
      button.innerHTML = "&#10084;";       // Cœur plein ❤️
    }

  });
});
