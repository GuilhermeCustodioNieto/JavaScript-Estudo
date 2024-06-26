let limiteMensal = Number(prompt("Qual o seu limite mensal? "));
let valorAPagar = 0;

const precoTelefone = Number(prompt("E qual o preco do telefone? "));
const precoAcessorio = Number(prompt("E o preco do acessório? "));
const taxaImposto = 0.02;

while (valorAPagar < limiteMensal) {
  valorAPagar += precoTelefone;

  if (valorAPagar <= precoAcessorio) {
    valorAPagar += precoAcessorio;
  }
}

function calcularTaxa(valorAPagar) {
  return valorAPagar * taxaImposto;
}

function formatarSaida(valorAPagar) {
  return "$" + valorAPagar.toFixed(2);
}

valorAPagar = calcularTaxa(valorAPagar);
valorAPagar = formatarSaida(valorAPagar);

console.log(`Sua compra teve um total de: ${valorAPagar}`);

if (valorAPagar > limiteMensal) {
  console.log(`Você não pode pagar pela compra`);
}
