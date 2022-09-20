const prompt = require('prompt-sync')({sigint:true});
 const nome = prompt('Nome do aluno:')
  var nota1 = prompt('digite a nota do primeira nota:')
  var nota2 = prompt('digite a segunda nota:')
  var nota3 = prompt('digite a terceira nota:')
   media = (Number(nota1)+Number(nota2)+Number(nota3))/3
    if (media >= 5) 
          console.log('parabens', nome ,',voce foi apovado') 
      
    else  if (media >= 3 && media < 5)
           console.log( nome , 'esta de recuperaçao') 
         
    else if (media < 3)
           console.log(nome,'esta reprovado')
        

