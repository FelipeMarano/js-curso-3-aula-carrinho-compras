let totalGeral;
limpar();

function adicionar () { 
//recuperar valores: nome do produto, quantidade e valor   
let produto = document.getElementById ("produto").value; // pegar no HTML o ID do produto e o valor 
let nomeProduto = produto.split ("-") [0]; // para pegar o que vem depois do "-", a primeira parte do "produto" (que seria o nome (ex:celular)) 
let valorUnitario = produto.split ("R$") [1]; // para pegar o que vem depois do "$", a segunda parte do "produto" (que seria o valor (ex:1400))
let quantidade = document.getElementById ("quantidade").value; // para pegar o valor da quantidade do "produto"

// alert (nomeProduto); //para testar o nome do produtos
// alert (valorUnitario); // para testar o valor
// alert (quantidade.value); //para testar a quantidade dos produtos

// calcular o preço (subtotal):
let preco = quantidade * valorUnitario;  // ex: caso sejam 2 celulares, ele calcula para virar 2800
// alert (preco); // parar testar o preço somado
let carrinho = document.getElementById ("lista-produtos"); // pegando a "section" dos produtos dentro do HTML

// adicionar no carrinho:
carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos" id="lista-produtos">
<section class="carrinho__produtos__produto">
  <span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">${preco}</span>
</section>`; // substituindo os nomes dos produtos no HMTL pelas variaveis do JS // concatenando para aparecer mais itens na lista

// atualizar o valor total:
totalGeral = totalGeral + preco; // definido no começo do codigo
let campoTotal = document.getElementById ("valor-total"); // pegando no HTML o ID do valor total
campoTotal.textContent = `R$ ${totalGeral}`; // fazendo ele mudar 
document.getElementById ("quantidade").value = " "; // para limpar o quantidade e deixar em vazio ou zero
}

function limpar () {

totalGeral = 0;
document.getElementById ("lista-produtos").innerHTML = " "; // para limpar o exemplo ("celular") e deixar ele vazio
document.getElementById ("valor-total").textContent = "R$ 0" // para limpar o valor total do exemplo (1400) e deixar ele com 0


}
