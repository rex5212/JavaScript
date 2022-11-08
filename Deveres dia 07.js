const prompt = require('prompt-sync')({sigint:true});
 /*var codigo = prompt('coloque um valor menor que 5 ou = : ')
 while (codigo <= 5){ 
      console.log(codigo)
      codigo++
    
  }
*/
 

 /*var valor1 = prompt('digite o primeiro valor: ')
 var valor2 = prompt('digite o segundo valor: ')
  while (valor2 == 0){
      console.log('a equaçao nao pode se feita')
        valor2 = prompt('digite um valor > 0: ')
  }
   resutaldo = valor1 / valor2
    console.log('seu resultado é', resutaldo)
*/

var num , media = 0, soma = 0, contador = 0

  while (num != 0){
    num = prompt('coloque um valor: ')
     soma = soma + Number(num) 
   contador++
  }
  contador--
 media = soma / contador
   console.log('a media dos numeros digitados e', media)

/*
var num = 1, qpares = 0, qimpar = 0, contador = 0
while (num != 0) {
    num = prompt("Digite um número (Tecle 0 para SAIR): ") 
    if (Number(num) != 0){
       if (Number(num) % 2 == 0){
          qpares = qpares + 1
       }else{
          qimpar = qimpar + 1 
       }
       contador++ // conta quantos numeros foram digitados
    }
}
if (contador != 0){
   console.log("Quantidade de numeros digitador foi de: ", contador)
   console.log("Quantidade de numeros pares é: ", qpares)
   console.log("Quantidade de numeros impares é: ", qimpar)
} else{
  console.log("Voce saiu do programa sem digitar nenhum numero")
}
  */
