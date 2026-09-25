// estrutura condicionias (tmando decisoes)
// As estruturas condicionais permitem  execultar diferentes blocos de codigo dependo de uma condição

// iF/Else-condicionis
// if- Verificar se uma condição é verdadera e executa o codigo dentro dele, se a condição for falsa
// O ELSE pode execultar outro bloco de codigo

let idade = 12
 
if(idade >= 18){
    console.log("Você é maior de idade")
} else {
    console.log("voê é menor de idade");


}


// IF, ELSE IF, ELSE (Multiplas Condiçoes)
let idade2 = 10; 

if (idade2 < 12){
    console.log("Você é uma criança");
} else if (idade2 < 18){
    console.log("Você é um adolescente");
} else {
    console.log("Você é adulto");


}