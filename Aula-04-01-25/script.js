var texto = document.getElementById("item").addEventListener("keypress", function(event){
    if (event.key === "Enter"){
        adicionarItem();
    }
});

var adc = document.getElementById("adicao").addEventListener("click", adicionarItem);



function adicionarItem(){
    let texto = document.getElementById("item").value;
    let novoItem = document.createElement("tr")
    novoItem.innerHTML = `<td>${texto}</td>`

    let tabela = document.getElementById("tabela").appendChild(novoItem)

    selecionar(texto);
    
    document.getElementById("item").value = "";

}

function selecionar(text){
    let selecao = document.getElementById("escolha");
    let opcao = document.createElement("option");
    opcao.value = text; 
    opcao.textContent = text;
    selecao.appendChild(opcao)
}

var marcar = document.getElementById("marcar").addEventListener("click", botaoMarcar())
var marcar = document.getElementById("desmarcar").addEventListener("click", )
var remover = document.getElementById("eliminar").addEventListener("click", )

function botaoMarcar(){

}
