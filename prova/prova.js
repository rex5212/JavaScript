/* Implemente, e poste aqui, uma lógica simples em linguagem JavaScript para preencher 
um Array com a sequência de 1 a 20 números inteiros. Depois retire os números pares deste Array 
utilizando o método estático splice( ) 
e apresente novamente a lista com os números ímpares que restaram, na console.*/

var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var numerosI = []

for(i = 0; i < 20; i++){
    if(numeros[i] % 2){
        numerosI.push(numeros[i])
    }
}

console.log(numerosI)

/* tenta fazer
var numeros = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
var numerosI = []

for(i = 0; i < 20; i++){
    if(numeros[i] % 2){
        numeros.splice(numeros[i], 1)
        console.log(numeros)
    }
}
*/

/*Implemente, e poste aqui, um método simples em JavaScript com a lógica 
para inserir elementos no topo de uma pilha (pode ser por meio de um array),
 sem utilizar diretamente o método pronto push() da linguagem JavaScript.
                    fazer melhor esse
 */

// var array = prompt('valor que que adiciona: ')
var array = ['Tables', 'Iphone']
var pilha = ['Livro', 'Console', 'Computador']
var npilha = []

npilha = [array, pilha]

console.log(npilha)




