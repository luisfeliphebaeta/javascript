
// function nomeDaFuncao ( parâmetos) {
//   bloco de codigo
//   return saida
// }

//  nomeDaFuncao ( argumento1, argumento2, ...)

// Parametros
function soma ( valor1, valor2) {
     resultado = valor1 + valor2
     return resultado
}
// Argumentos
console.log( multiplicar(2, 3));

function multiplicar (valor1, valor2){
     resultado = valor1 * valor2
     return resultado
}

 console.log (dividir (6, 2)); 

 function dividir (valor1, valor2) {
     resultado = valor1 / valor2
     return resultado
 }

 console.log (sub (6, 2));

 function sub (valor1, valor2) {
     resultado = valor1 - valor2
     return resultado
 }

 console.log (soma (5, 4))
 function soma (valor1, valor2){
     resultado = valor1 + valor2
     return resultado
 }

 console.log(sub (8,2));
 function sub (valor1, valor2){
     resultado = valor1 - valor2
     return resultado
 }

 const x = function (a, b){ return a * b;}

 console.log(x)

 console.log(x (10, 10))

 console.log (div (2, 4));
 function div (valor1, valor2){
      resultado = valor1 / valor2
      return resultado
 }

 function paraCelcius(fahrenheit){
     return (5/9) * (fahrenheit - 32);
 }
 console.log(paraCelcius(90))

 function queNumero(v1, v2){
     if (v2 === undefined){
      v2 = 2;
  }
    return v1 + v2; 
  }
  console.log(queNumero(2));

//A partir no ECMAscript 2015
function queNumero(v1, v2 = 3){
    return v1 + v2;
}
console.log(queNumero(2 ,2));

//Arrow function
//A arrow function permite escrever uma sintaxer de uma função mais curta

//Uma função normal
function falar(){
    console.log("cOlé!")
}
falar();

const segunda = function (){
    return "segunda-feira!"
}
console.log(segunda())

//Uma função Arrow
terca = () => {
    return "terça-feira!"
}
console.log(terca())

//Pode retirar as chaves e o return se estiver apenas uma isntrução

quarta = () => "Quarta-feira!"

console.log(quarta())

//Cao não tenha parâmetro os parenteses são necesários

//Se tiver parâmetros...
quinta = dia => "Amanhã é" + dia;

console.log(quinta("quinta-feira"))

//Com valor
dobro = a => 2 * a;

console.log(dobro(2))

//-------------------------//
let divide = (c, d) => c/d;
console.log(divide(4,2));
