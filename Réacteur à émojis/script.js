const btns = document.querySelectorAll(".emoji-btn");


function updateCount(button){
    
     // 1. Rechercher l'élément de comptage dans le bouton
  const countEl = button.querySelector(".count");
  if (!countEl) return;

  // 2. Analyser le compteur actuel (ex: "3/10" → 3)
  const currCount = Number(countEl.textContent.split("/")[0]);

  // 3. Vérifier si le maximum est atteint
  if (currCount >= 10) return;

  // 4. Incrémenter le compteur
  const newCount = currCount + 1;

  // 5. Mettre à jour l'affichage
  countEl.textContent = `${newCount}/10`;
}


const btns = document.querySelectorAll(".emoji-btn");

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    updateCount(btn);
  });
});
