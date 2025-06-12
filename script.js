const curiosidades = [
  "Foi construída nos anos 1930 para o transporte ferroviário.",
  "A estrutura é 100% de ferro e usa rebites em vez de solda.",
  "É considerada um dos símbolos da cidade de Colatina.",
  "Já foi cenário de ensaios fotográficos e vídeos regionais.",
  "A passarela de pedestres está atualmente interditada."
];

const lista = document.getElementById("curiosities-list");
curiosidades.forEach(item => {
  const li = document.createElement("li");
  li.textContent = item;
  lista.appendChild(li);
});