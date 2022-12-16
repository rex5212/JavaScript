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
let lista = ['Renato', 'João', 'Diogo', 'Hugo']
let next = []
let Stringnext = ''
let back = []
let Stringback = ''

for (let i = 0; i < lista.length; i++){
    
    if (lista[i] == lista.length - 1){
        next[i] = null
    } else {
        next[i] = [lista[i + 1]]
    }
    if (lista[i] == 0){
        back[i] = null
    } else {
        back[i] = [lista[i - 1]]
    }

}

for (let i = 0; i < lista.length; i++){
    if (i == 0){
        Stringnext += `${lista[i]} -> ${next[i]} -> `
    } else {
        Stringnext += ` ${next[i]} ->`
    }
}

for (let i = 0; i < lista.length; i++){
    if (i == 3){
        Stringback += `<- ${back[i]} <- ${lista[i]}`
    } else {
        Stringback += `<- ${back[i]} `
    }
}

console.log(`${Stringnext} \n ${Stringback}`)

for (let i = 0; i < lista.length; i++){
    
}

console.log(lista)