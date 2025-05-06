let numeros = [1,2,3,4,5,]
console.log(numeros);

let cores = ["vermelho", "azul"]
console.log(cores)

let lista = [];
lista[0] = "primeiro";
lista[1] = " segundo";
console.log(lista);
console.log(lista[1]);

//metodos
numeros.push(6);
console.log(numeros);

numeros.unshift(0.5);
console.log(numeros)

numeros.splice(3,0,2.5);
console.log(numeros);

//metodos remover
numeros.pop();
console.log(numeros);

numeros.shift();
console.log(numeros);

numeros.splice(2, 1);
console.log(numeros);

//acesso e pesquisa dos elementos
//encontrar a posição de um elemento
console.log(numeros.indexOf[6]);
console.log(numeros.indexOf[4]);

//verificar se o elemento existe
console.log(numeros.includes(4));
console.log(numeros.includes(7));

for (let i = 0; i < numeros.length; i++){
    console.log(`Elemento ${i}: ${numeros[i]}`);
}

for (let numero of numeros){
    console.log(numero);
}