// Rolagem suave para o topo
document.querySelector('footer a').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Animação de entrada das seções
const sections = document.querySelectorAll('section');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, {
  threshold: 0.1
});

sections.forEach(section => {
  section.classList.add('hidden');
  observer.observe(section);
});