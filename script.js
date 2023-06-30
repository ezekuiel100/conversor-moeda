let quantia = document.querySelector(".quantia");
let botaoConverter = document.querySelector("button");
let resultado = document.querySelector(".resultado");

async function converterMoeda() {
  let requestURL = `https://api.exchangerate.host/convert?from=BRL&to=USD&amount=${quantia.value}`;
  let response = await fetch(requestURL);
  let data = await response.json();
  resultado.textContent = data.result.toFixed(2);
}

botaoConverter.addEventListener("click", (e) => {
  e.preventDefault();
  converterMoeda();
});
