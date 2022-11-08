const prompt = require('prompt-sync')({sigint:true});
 var salario = prompt('informe seu salario: ')
 let opcao = prompt('informe a opçao que deseja (1 para 15%, 2 para 10%, 3 para 7% e 4 para digita o valor requisitado): ')
//nao esta dando valor, foi ate onde cheguei
   switch(opcao){
       case 1: 
        final = Number(15)/Number(100) * Number(salario) + Number(salario)
        console.log('seu salario sera ',final)
           break

       case 2:
         final = Number(10)/Number(100) * Number(salario) + Number(salario)
            console.log('seu salario sera ',final)
           break

        case 3:
            final = Number(7)/Number(100) * Number(salario) + Number(salario)
            console.log('seu salario sera ',final)
               break  

        case 4: let porcentagem = prompt('digite a porcentagem desejada: ')
            final = porcentagem/Number(100) * Number(salario) + Number(salario)
            console.log('seu salario sera ',final)
               break

         default:
            opcao = prompt('informe uma das opçao que deseja (1 para 15%, 2 para 10%, 3 para 7% e 4 para digita o valor requisitado): ')
   }
    
