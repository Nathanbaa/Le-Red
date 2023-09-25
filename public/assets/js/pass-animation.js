// Sélectionnez l'élément avec l'id "pass-one-day"
const passOneDay = document.getElementById("pass-one-day");

// Sélectionnez l'élément avec l'id "pass-three-days"
const passThreeDays = document.getElementById("pass-three-days");

// Fonction pour appliquer un effet de blur
function applyBlur(element) {
  element.style.transition = "filter 0.5s ease";
  element.style.filter = "blur(5px)"; // Vous pouvez ajuster la valeur de flou (5px ici)
}

// Fonction pour supprimer l'effet de blur
function removeBlur(element) {
  element.style.transition = "filter 0.5s ease";
  element.style.filter = "none";
}

// Ajoutez un écouteur d'événements pour le survol de l'élément "pass-one-day"
passOneDay.addEventListener("mouseover", () => {
  applyBlur(passThreeDays);
});

passOneDay.addEventListener("mouseout", () => {
  removeBlur(passThreeDays);
});

// Ajoutez un écouteur d'événements pour le survol de l'élément "pass-three-days"
passThreeDays.addEventListener("mouseover", () => {
  applyBlur(passOneDay);
});

passThreeDays.addEventListener("mouseout", () => {
  removeBlur(passOneDay);
});