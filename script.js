// Rolagem suave para o topo ao clicar no link no rodapé
document.querySelector('footer a').addEventListener('click', function (e) {
  e.preventDefault();
  window.scrollTo({ top: 0, behavior: 'smooth' });
});