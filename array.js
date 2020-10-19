const valores = [7.8, 6.4, 5.3, 9.8, 8.6, 3.5, 7.2, 9.3, 6.0]
console.log(valores)

console.log(valores[0])
console.log(valores[1], valores [2])

// lenght - Trás a quantidade de elementos

console.log(valores.length)

console.log("----------------")
for(let i = 1 ; i < valores.length; i++){
console.log(valores[i])
}

//push() -- adiciona um elemento sempre ao final do array

console.log(valores.length)
valores[9] = 8.6
console.log(valores)

valores.push(9.5)
console.log(valores)

valores.push(9.7)
console.log(valores)

//pop() - Retira o ultimo valore do array (no caso o do push)
valores.pop()
console.log(valores)

console.log(valores.pop())
console.log(valores)

console.log("------------------")
//Uma outra forma de alterar um elemento é o delete

delete valores[4]
console.log(valores)

valores.push(7.7)
console.log(valores)

valores[4] = 7.1
console.log(valores)

console.log(typeof valores)

const fabricantes = ["Audi", "BMW", "Chevrolet", "Ford", "Mercedes", "Woltsvagem"]

function imprimir(marcas){
    console.log(`${marcas}`)
}
fabricantes.forEach(imprimir)