// Em javascript, com exceção dos valores primitivos. Quase "tudo" é um objeto.

const prod1 = {}
prod1.nome = "TECLADO E MOUSE"
prod1.tipo = "Wireles"

console.log(prod1)

// Objeto em javaScript não pe a mesma coisa que JSON
// Exemplo de JSON

// {
//     "nome" : "teclado e mouse",
//     "tipo" : "wirelers"
// }

const livro = 
{
    nome:"Matador de onça",
    autor :"Jose Berranteiro",
    idioma :"Portugues - Brasil",
    dataPublicacao : 2016
};

console.log(livro)

console.log("-------------------")

const disciplina = 
{
    nome : "Programação Client-side",
    cargaHoraria: 230,
    turno: "manhã"
}
console.log(disciplina)

console.log("-------------")

const aluno = 
{
    nome:"Joãozinho",
    sobreNome: "Paulin",
    idade: 17,
    nomeCompleto: function() {return this.nome + " " + this.sobreNome + " " + this.idade;}

}
console.log(aluno.nomeCompleto())
