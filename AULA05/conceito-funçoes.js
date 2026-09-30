// Funçoes em JAVASCRIPT

// Oque é uma função
// Uma função é um bloco de codigo reutiliza, criando para execultar uma tarefa especifica.

// Analogia SIMPLES
// voce vai colocar valores (parâmetros)
// ela prrocessa 
// Delve o resultado 

// ----------------------------
// estrutura basica de uma função
// ----------------------------

// function nomeDafunção(parametro1, Parametro2){
// // codigo que será executado
// return resultado
// }

// function ---> palavra chave
// nomeDafunção---> nome da função
// return---> valor que a função devolve

// 5 EXWMPLOS

// 1 - somar dois numeros

function somar(a,b) {
    return a + b;
}

console.log(somar(2,15))

// 2-converter real para dolar
function realParadolar(valorReal, cotacão){
    return valorReal /cotacão;
}

console.log(realParadolar(10,5.20).toFixed(2))

// 2 - conveter dolar para real 

function dolarParareal(valordolar, cotacão){
    return valordolar * cotacão;
}

console.log(dolarParareal(6,5.20).toFixed(2))


// 4- Aumento de salario (voce merece 25% de aumento)

function calcularAumneto(salarioAtual){
    return salarioAtual * 1.25
}
console.log(calcularAumneto(3500));

console.log("Você vai receber mas 25% de salario, o valor ficara R$" +calcularAumneto(3500)+ "");


// verifique se á par ou impar?

const numero=2;

    if (numero % 2 == 0){
        console.log(`O numero ${numero} é par`)
} else {
console.log(`O numero ${numero} é impar `)
}




