// parte (1)  

let temperatura = 25;

if (temperatura < 15) {
    console.log("Muito frio");
} else if (temperatura <= 20) {
    console.log("Frio");
} else if (temperatura <= 28) {
    console.log("Agradável");
} else {
    console.log("Muito quente");
}


// parte (2) 

let nota = 8;

if (nota >= 9) {
    console.log("Conceito A");
} else if (nota >= 7) {
    console.log("Conceito B");
} else if (nota >= 5) {
    console.log("Conceito C");
} else {
    console.log("Conceito D");
}


// parte (3) 

let dia = 9;

if (dia == 1) {
    console.log("Domingo");
} else if (dia == 2) {
    console.log("Segunda-feira");
} else if (dia == 3) {
    console.log("Terça-feira");
} else if (dia == 4) {
    console.log("Quarta-feira");
} else if (dia == 5) {
    console.log("Quinta-feira");
} else if (dia == 6) {
    console.log("Sexta-feira");
} else if (dia == 7) {
    console.log("Sábado");
} else {
    console.log("Dia inválido");
}


// DESAFIO - 

let peso = 70;
let altura = 1.70;


let imc = peso / (altura * altura);

console.log("IMC:", imc);

if (imc < 18.5) {
    console.log("Abaixo do peso");
} else if (imc < 25) {
    console.log("Peso normal");
} else if (imc < 30) {
    console.log("Sobrepeso");
} else {
    console.log("Obeso");
}