const btn = document.createElement("button");
btn.textContent = "Cliquer";

btn.addEventListener("click", () => {
  alert("Bouton cliqué !");
});

zone.appendChild(btn);
