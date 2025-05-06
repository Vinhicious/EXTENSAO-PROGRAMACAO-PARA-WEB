var contador1 = 0;

var b1 = document.getElementById("in");
var b2 = document.getElementById("de");
var p1 = document.getElementById("p1")

b1.onclick = function() {
    contador1++
    p1.textContent = contador1;
}

b2.onclick = function() {
    if(contador1 <=  0){
        alert("O contador já está em 0!")
    }else{
        contador1--
        p1.textContent = contador1;
    }
    
}

var texto1 = document.getElementById("t1");
var p2 = document.getElementById("p2");
var paragrafo = document.getElementById("paragrafo1")
var contador2 = 0;

texto1.onchange = function() {
    contador2 = texto1.value.replace(/\s+/g, '').length
    p2.textContent = `${contador2} caracteres`;
    paragrafo.textContent = texto1.value;
}

var botao = document.getElementById("adicionarBotao");
var select = document.getElementById("minhaLista");
var listasDiv = document.getElementById("listas");

botao.onclick = function() {
    var tipoLista = select.value;

    var listaExistente = document.getElementById(tipoLista);

    if (!listaExistente) {
        listaExistente = document.createElement(tipoLista === "ord" ? "ol" : "ul");
        listaExistente.id = tipoLista; 
        listasDiv.appendChild(listaExistente); 
    }
};
