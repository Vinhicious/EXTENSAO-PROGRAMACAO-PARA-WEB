/*
//alert("Olá Mundo!")

console.log("Olá Mundo!");

//variaveis
var animal = "gato";
console.log("animal");

//let
let nome ="fulano";
console.log(nome);

//const
const valor = 10;
//valor = 20

console.log("valor");
var numero = 10;
console.log("numero");

//verificar tippo
console.log(typeof animal);
console.log(typeof numero);

//template literal
console.log(`O ${animal} possui ${valor} meses de vida.`);

//comparação
console.log(5 == "5"); //igualdade
console.log(5 === "5"); //extritamente igual

console.log(5 != "5"); //desigualdade
console.log(5 !== "5"); //extritamente desigual
*/

//dados de entrada(input)
var nomeCompleto = window.prompt("Digite o nome:");
var idade = parseFloat(window.prompt("Digite a idade:"));

console.log(typeof idade);

console.log(`Ola ${nomeCompleto} você possui ${idade} anos.`);