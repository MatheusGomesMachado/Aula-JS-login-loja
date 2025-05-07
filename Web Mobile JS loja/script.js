let saldo = 200.00;
let carrinho = [];

function atualizarInterface() {
  const lista = document.getElementById("lista-carrinho");
  lista.innerHTML = "";

  let total = 0;
  for (let i = 0; i < carrinho.length; i++) {
    const item = document.createElement("li");
    item.textContent = `${carrinho[i].nome} - R$${carrinho[i].preco.toFixed(2)}`;
    lista.appendChild(item);
    total += carrinho[i].preco;
  }

  document.getElementById("total").textContent = total.toFixed(2);

  const saldoDisponivel = saldo - total;
  const saldoSpan = document.getElementById("saldo");
  saldoSpan.textContent = saldoDisponivel.toFixed(2);

  return saldoDisponivel;
}

function adicionarProduto(nome, preco) {
  let totalAtual = 0;
  for (let item of carrinho) {
    totalAtual += item.preco;
  }

  if (totalAtual + preco > saldo) {
    document.getElementById("mensagem").textContent = "Saldo insuficiente! Não é possível adicionar mais itens.";
    return;
  }

  carrinho.push({ nome, preco });
  document.getElementById("mensagem").textContent = "";
  atualizarInterface();
}

function esvaziarCarrinho() {
    carrinho = [];
    saldo = 200.00;
    document.getElementById("mensagem").textContent = "";
    atualizarInterface();
  }
  