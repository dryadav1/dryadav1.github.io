// Fade-in animation on scroll
const sections = document.querySelectorAll("section");

function fadeInSections() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
      section.style.transition = "all 0.8s ease-out";
    }
  });
}

sections.forEach(section => {
  section.style.opacity = "0";
  section.style.transform = "translateY(40px)";
});

window.addEventListener("scroll", fadeInSections);
window.addEventListener("load", fadeInSections);
