// Animação ao carregar a página
document.addEventListener("DOMContentLoaded", () => {
  const heroContent = document.querySelector(".hero .content");
  heroContent.style.transition = "opacity 2s ease";
  heroContent.style.opacity = "1";
});