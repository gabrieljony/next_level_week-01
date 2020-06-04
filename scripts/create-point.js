// selecionar os estados e as cidades do form

function getEstados() {
  const ufselect = document.querySelector("select[name=uf]");

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
    .then((res) => res.json())
    .then((states) => {
      for (state of states) {
        ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`;
      }
    });
}

getEstados();

function getCidades(event) {
  const cityselect = document.querySelector("select[name=city]");

  const stateinput = document.querySelector("input[name=state]");

  const ufvalue = event.target.value;

  const indexOfSelectedState = event.target.selectedIndex;
  stateinput.value = event.target.options[indexOfSelectedState].text;

  const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufvalue}/municipios`;

  cityselect.innerHTML = "<option value>Selecione a Cidade</option>";
  cityselect.disabled = true;

  fetch(url)
    .then((res) => res.json())
    .then((cities) => {
      for (const city of cities) {
        cityselect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`;
      }

      cityselect.disabled = false;
    });
}

document
  .querySelector("select[name=uf]")
  .addEventListener("change", getCidades);
