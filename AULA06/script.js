// =====================================
// SELECIONANDO ELEMENTOS DO DOM
// =====================================

// Selecionando por ID
// console.log(document.getElementById("titulo"));
// Para visualização na console.
 
let titulo = document.getElementById("titulo");
let subtitulo = document.getElementById("subtitulo");
let paragrafo = document.getElementById("paragrafo");
let imagem = document.getElementById("imageteste");

// Selecionando por classe
let caixas = document.getElementsByClassName("box");

// Mostrar no console.log
console.log(titulo);
console.log(caixas);
console.log(imagem);

// =====================================
// FUNÇÃO PARA ALTERAR O CONTEÚDO
// =====================================

function alterar(){
    titulo.innerText = "Jarvis dominou tudo! 🤖"
    subtitulo.innerText = "Só que não!"
    paragrafo.innerText = "O texto do parágrafo foi modificado pelo JavaScript"
}
