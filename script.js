let lanches = [

    { nome: "X-Burguer", preco: 15 },
    { nome: "X-Salada", preco: 18 },
    { nome: "Hot-Dog", preco: 12 },
    { nome: "X-Bacon", preco: 22 },
    { nome: "Batata Frita", preco: 12 },
    { nome: "X-Tudo", preco: 25 }

];


// Adicionar um novo lanche

lanches.push({
    nome: "Misto Quente",
    preco: 10
});


// Organizar por nome

lanches.sort((a, b) => a.nome.localeCompare(b.nome));


// Calcular o total dos preços

let total = lanches.reduce(
    (soma, lanche) => soma + lanche.preco,
    0
);


// Mostrar apenas os lanches abaixo de R$ 20

let baratos = lanches.filter(
    lanche => lanche.preco < 20
);


// Mostrar no console

console.log("Cardápio:", lanches);

console.log("Total dos preços:", total);

console.log("Lanches abaixo de R$ 20:", baratos);


// ==============================
// PEDIDO
// ==============================

let pedido = [];

let botoes = document.querySelectorAll(".item button");

botoes.forEach(function(botao) {

    botao.addEventListener("click", function() {

        let item = botao.parentElement;

        let nome = item.querySelector("h3").textContent;

        let precoTexto = item.querySelector("strong").textContent;

        let preco = parseFloat(
            precoTexto
                .replace("R$", "")
                .replace(",", ".")
        );


        // Adicionar ao pedido

        pedido.push({
            nome: nome,
            preco: preco
        });


        // Mostrar o pedido

        let listaPedido =
            document.querySelector("#lista-pedido");

        listaPedido.innerHTML = "";


        pedido.forEach(function(lanche) {

            let div = document.createElement("div");

            div.classList.add("item-pedido");

            div.innerHTML =
                "<span>" + lanche.nome + "</span>" +
                "<strong>R$ " +
                lanche.preco.toFixed(2).replace(".", ",") +
                "</strong>";

            listaPedido.appendChild(div);

        });


        // Calcular total do pedido

        let totalPedido = pedido.reduce(
            (soma, lanche) => soma + lanche.preco,
            0
        );


        document.querySelector("#total-pedido").textContent =
            "Total: R$ " +
            totalPedido.toFixed(2).replace(".", ",");


        // Mudar botão

        botao.textContent = "Adicionado ✓";


        setTimeout(function() {

            botao.textContent = "Adicionar";

        }, 1000);

    });

});