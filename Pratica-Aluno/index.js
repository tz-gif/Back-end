
// Agrupando as informações em um Objeto
const aluno = {
    nome: "Davi",
    idade: 17,
    curso: "Desenvolvimento de Sistemas",
    
    // Usando um Array para listar o que você está aprendendo
    tecnologias: ["JavaScript", "HTML", "CSS", "Node.js"],
    
    // Criando uma Função (método) dentro do objeto para exibir o perfil
    exibirPerfil: function() {
        console.log("===============================");
        console.log("      PERFIL DO ESTUDANTE      ");
        console.log("===============================");
        // O uso da crase (`) permite colocar variáveis no meio do texto com ${}
        console.log(`Nome do Aluno: ${this.nome}`);
        console.log(`Idade: ${this.idade} anos`);
        console.log(`Curso Atual: ${this.curso}`);
        console.log(`Linguagens em estudo: ${this.tecnologias.join(' | ')}`);
        console.log("===============================\n");
    }
};

// Executando a função criada acima
aluno.exibirPerfil();

// Adicionando uma estrutura de decisão (If / Else) baseada na idade
console.log("--- Análise de Carreira ---");
if (aluno.idade >= 18) {
    console.log("Status: Maior de idade. Já pode buscar vagas de estágio em tempo integral ou CLT junior.");
} else {
    console.log("Status: Menor de idade. Excelente momento para buscar vagas de Jovem Aprendiz na área de tecnologia.");
}