function insert(num) {
  let input = document.activeElement;
  if (input.value === "0" && num !== ".") {
    input.value = "";
  }
  input.value += num;
}

function clearScreen() {
  document.getElementById("precoCusto").value = "";
  document.getElementById("porcentagemICMS").value = "";
  document.getElementById("resultado").innerHTML = `
        <p class="label">Resultado:</p>
        <p>Preço Final com ICMS:</p>
        <p class="valor"></p>
        <p class="icms-info"></p>
    `;
}

function calcularICMS() {
  let precoCusto = parseFloat(document.getElementById("precoCusto").value);
  let porcentagemICMS = parseFloat(
    document.getElementById("porcentagemICMS").value
  );

  if (
    isNaN(precoCusto) ||
    precoCusto <= 0 ||
    isNaN(porcentagemICMS) ||
    porcentagemICMS <= 0
  ) {
    alert("Por favor, digite valores válidos.");
    return;
  }

  let taxaICMS = porcentagemICMS / 100; 
  let valorICMS = precoCusto * taxaICMS;
  let precoFinal = precoCusto + valorICMS;

  document.querySelector(
    "#resultado .valor"
  ).innerText = `R$${precoFinal.toFixed(2)}`;
  document.querySelector(
    "#resultado .icms-info"
  ).innerText = `(ICMS de ${porcentagemICMS}%)`;
}
