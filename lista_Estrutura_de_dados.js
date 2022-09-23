//const prompt = require('prompt-sync')({sigint:true});

// shift() retira do inicia
// unshift() coloca no inicio
// slice() coloca no meio do array
// spalte() tira depois do indice indicado

console.log('-----------Questao_1--------------')

var i = 0
const numerosP = ([2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40])

while(i < numerosP.length){
   console.log(`numero ${numerosP[i]}`)
   i++
}

/*
var numeros1 = []
numero1.push(prompt('Digite os 20 numeros que serao selecionados: '))

while(i < numeros1.length){
    console.log(`numero ${numerosP[i]}`)
    i++
}
*/ 

console.log('-----------Questao_2--------------')

var i = 0
const numerosI = ([1,3,5,7,9,11,13,15,17,19,21,23,25,27,29,31,33,35,39,41])
do {
    console.log(`numero ${numerosI[i]}`)
    i++
} while (i < numerosI.length)

console.log('-----------Questao_3--------------')

//var pedidos = prompt('Digite o codigo do seu pedido: ')
/*
var cardapio = {
  100:{Cachorro_quente: 1.70},
  101:{Bauru_Simples:2.30},
  102:{Bauru_com_ovo:2.60},
  103:{Hamburguer:2.40},
  104:{Cheeseburguer:2.50}, 
  105:{Refrigerante:1.00}
}

var lanches = {100 : 1.70, 101: 2.30, 102: 2.60, 103: 2.40, 104: 2.50, 105: 1.00}
*/
var precoT = 0
var pedidos = 0

while (true){
var codigoL = prompt('digite o codigo do seu lanche: ')

if(codigoL == 0){
    console.log(`Seus ${pedidos} deram R$${precoT.toFixed(2)}`)
    break
} else {

if(codigoL == 100){
    let precoC = 1.7 
    var pedidosQ = Number(prompt('Qual a quatidade de unidades do pedido: '))
    console.log(`${pedidosQ} Cachoro-quente adicionado ao carrinho custando ${precoC}`)
    pedidos = pedidos + pedidosQ  
    precoT = precoT + (precoC * pedidosQ)
}
else if (codigoL == 101){
    let precoBS = 2.3 
    var pedidosQ = Number(prompt('Qual a quatidade de unidades do pedido: '))
    console.log(`${pedidosQ} Bauru-Simples adicionado ao carrinho custando ${precoBS}`)
    pedidos = pedidos + pedidosQ
    precoT = precoT + (precoBS * pedidosQ)
} 
else if (codigoL == 102){
    let precoBO = 2.6
    var pedidosQ = Number(prompt('Qual a quatidade de unidades do pedido: '))
    console.log(`${pedidosQ} Bauru com ovo adicionado ao carrinho custando ${precoBO}`)
    pedidos = pedidos + pedidosQ
    precoT = precoT + (precoBO * pedidosQ)
} 
else if (codigoL == 103){
    let precoH = 2.4
    var pedidosQ = Number(prompt('Qual a quatidade de unidades do pedido: '))
    console.log(`${pedidosQ} Hamburguer adicionado ao carrinho custando ${precoH}`)
    pedidos = pedidos + pedidosQ
    precoT = precoT + (precoH * pedidosQ)
} 
else if (codigoL == 104){
    let precoCH = 2.5
    var pedidosQ = Number(prompt('Qual a quatidade de unidades do pedido: '))
    console.log(`${pedidosQ} Cheeseburguer adicionado ao carrinho custando ${precoCH}`)
    pedidos = pedidos + pedidosQ 
    precoT = precoT + (precoCH * pedidosQ)
} 
else if (codigoL == 105){
    let precoR = 1
    var pedidosQ = Number(prompt('Qual a quatidade de unidades do pedido: '))
    console.log(`${pedidosQ} Refrigerante adicionado ao carrinho custando ${precoR}`)
    pedidos = pedidos + pedidosQ
    precoT = precoT + (precoR * pedidosQ)
} 
}
}

console.log('-----------Questao_4--------------')

    var qcobaiasT = 0
    var quantidadeR = 0
    var quantidadeC = 0
    var r = 0
    var c = 0

for(i = 0; i < 2;){
    var qcobaias = Number(prompt('Quantida de cobaia(s) utilizada(s): '))
    var codigo = Number(prompt("Codigo Utilizado (1 sendo coelhos ou 2 sendo rato): "))
    qcobaiasT = qcobaiasT + qcobaias
    i++
    if(codigo == 1){
        console.log(`${qcobaias} Coelho(s) no ${[i]} teste`)
        c++
        quantidadeC = quantidadeC + qcobaias
    }else if(codigo == 2){
        console.log(`${qcobaias} Rato(s) no ${[i]} teste`)
        r++
        quantidadeR = quantidadeR + qcobaias
    }
}

 var PercentualC = quantidadeC / 100
 var PercentualR = quantidadeR / 100

console.log(`O total de cobaias Utilizada foi: ${qcobaiasT}`)
console.log(`O total de ratos foi ${r} e de Coelhos foi ${c} \n
 Com um precentual de ${PercentualC} ou ${PercentualC * 100}% para Coelho \n
 e ${PercentualR} ou ${PercentualC * 100}% para Rato`)

console.log('-----------Questao_5--------------')

var numeros = (5)

