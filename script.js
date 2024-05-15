// Perguntas frequentes abrir/fechar

const perguntas = document.querySelectorAll(".perguntas button");

function abrir(event) {
  const pergunta = event.currentTarget;
  const controls = pergunta.getAttribute("aria-controls");
  const resposta = document.getElementById(controls);

  resposta.classList.toggle("ativa");
  const ativa = resposta.classList.contains("ativa");
  pergunta.setAttribute("aria-expanded", ativa);
}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener("click", abrir);
}

perguntas.forEach(eventosPerguntas);
