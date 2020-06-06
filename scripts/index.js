// fazendo o modal funcionar

// pegando o BOTÃO de busca
const buttonSearch = document.querySelector("#page-home main a");

// pegando o modal
const modal = document.querySelector("#modal");

// pegando o BOTÃO de fechar o modal
const close = document.querySelector("#modal .header a");

buttonSearch.addEventListener("click", () => {
  modal.classList.remove("hide");
});

close.addEventListener("click", () => {
  modal.classList.add("hide");
});
