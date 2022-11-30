/** Favor implementar um algoritmo em JavaScript, de forma imperativa (passo a passo sem utilizar métodos prontos) que preencha dois
 *  conjuntos com 10 (dez) elementos numéricos (inteiros ou fracionários) cada, e que devolva um novo conjunto,
 *  aplicando a operação matemática de união, apresentando seu resultado na console. Postar aqui seu código-fonte:*/

let conjuntoA = [1,3,5,7,9,11,13,15,17,19]
let conjuntoB = [0,2,4,6,8,10,12,14,16,18]

let conjuntoU

for (let i = 0; i < conjuntoA.length; i++){
    if (!conjuntoU){
        conjuntoU = conjuntoA[i]
        i++
    }
    conjuntoU = `${conjuntoU}, ${conjuntoA[i]}`
}
for (let i = 0; i < conjuntoB.length; i++){
    conjuntoU = `${conjuntoU}, ${conjuntoB[i]}`
}

console.log(conjuntoU)


/** Favor implementar e postar aqui o código-fonte para um método em JavaScript, que apenas remova um elemento,
 *  do meio de uma lista duplamente encadeada, de forma imperativa, sem utilizar o comando delete (apenas ajustando seus ponteiros):*/

let remove = 'Diogo'
let lista = ['Renato', 'Diogo', 'João', 'Rick']

for (let i = 0; i < lista.length; i++){
    if (remove == lista[i]){
        lista[i] = lista[i + 1]
    }
}

console.log(lista)