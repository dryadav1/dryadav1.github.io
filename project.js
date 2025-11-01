// ===== Scroll Animation for Project Cards =====
const cards = document.querySelectorAll(".project-card");

function showCardsOnScroll() {
  const triggerBottom = window.innerHeight * 0.85;
  cards.forEach(card => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerBottom) {
      card.classList.add("visible");
    } else {
      card.classList.remove("visible");
    }
  });
}

window.addEventListener("scroll", showCardsOnScroll);
window.addEventListener("load", showCardsOnScroll);
