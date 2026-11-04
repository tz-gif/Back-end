// cronometro no terminal 

// =================================
// Bloco 01: Preparando o terminal 
// =================================
// require = "traga para cá uma ferramenta pronta"
// readline = "é a ferramneta do node que sabe conversar com o teclado"
const readline = require('readline');

//process.stdin = a Entrada do programa (teclado)
// Esta linha manda o Node AVISAR o programa toda vez que uma tecla for apertada
readline.emitKeypressEvents(process.stdin);
process.stdin.setRawMode(true);

// Mensagem de boas-vindas
console.log('⏰ Cronômetro iniciado!');
console.log('p = pausar/continuar | r= resetar | Ctrl+C = Sair');

//==================================
// Bloco 02: A memória do cronômetro
//==================================
// tempo quarda quantos segundos já passaram 
let tempo = 0;

// rodando é um interupitor de luz: true = contando, false = pausado
let rodando = true;

//=========================================
// Bloco 03: Deixando o tempo bonito(mm:ss)
//=========================================
function formatar(total){
    // math.floor arrendoda um minuto para baixo, sempre retornado um numero inteiro.
    // exemplo: 65/60 = 1.08... -> Math.floor joga fora os decimais -> 1
    const min = Math.floor(total/60);

    // o simbolo % dá o RESTO da divisão
    const seg = total % 60;

    // String(...)tranforma um numero em texto
    // padstart(2, 0) = "se tiver menos de 2 caracteres, complete com 0 na frente"
    // assim "5" vira "05", depois nos juntamos os pedaços com o ":"
    return String(min).padStart(2, '0') + ':' + String(seg).padStart(2, '0');
}

//=========================================
// Bloco 04: o ❤️ do programa
//=========================================
// setInterval = "repita isso a cada X milissegundos"
// 1000 milissegundos = 1 segundo (veja o número no final do bloco)
setInterval(() => {
    // só conta se o interruptor estiver ligado
    if (rodando) {
        //Soma 1 em tempo. É o mesmo que: tempo = tempo + 1
        tempo++;
        //limpa a tela para o número "mudar no mesmo lugar"
        console.clear();
        console.log('⏰ ' + formatar(tempo));
    }
}, 1000);

//==================================
// Bloco 05:  Ouvindo o teclado
//==================================
process.stdin.on('keypress', (letra, tecla) => {
    // Foi a tecla P? (=== compara se os dois lados são iguais)
    if (tecla.name === 'p') {
        // O ! INVERTE o valor: true vira false, false vira true
        rodando = !rodando;
        // Operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
        // É um if de uma linha só
        console.log(rodando ? '▶ Continuando': '⏸ Pausado');

    // senão, foi a teclado R?
    } else if (tecla.name === 'r') {
         tempo = 0;
         console.clear();
         console.log('⏱️ ' + formatar(tempo));
         console.log('🈯 resetado');

    } else if (tecla.ctrl && tecla.name === 'c') {
        console.log('\n🖐🏽🤚🏻 Até mais');
        process.exit();
    }
});