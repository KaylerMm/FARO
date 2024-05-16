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

/* armazenamento das perguntas */

const inputPerguntas = document.getElementById("pesquisaInput");
const listaPerguntas = document.getElementById("listaFaq");

inputPerguntas.addEventListener("keyup", () => {
  let expressao = inputPerguntas.value.toLowerCase();
  // console.log(expressao);

  if (expressao.length < 2 && expressao.length > 0) {
    return;
  }

  let lista = listaPerguntas.getElementsByTagName("dl");

  for (let posicao in lista) {
    if (true === isNaN(posicao)) {
      continue;
    }
    let conteudoLista = lista[posicao].innerHTML.toLowerCase();
    console.log(conteudoLista);
    if (true === conteudoLista.includes(expressao)) {
      lista[posicao].style.display = "";
      //  conteudoLista.style.background = "plum";
    } else {
      lista[posicao].style.display = "none";
    }
  }
});
