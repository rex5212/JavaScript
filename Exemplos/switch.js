var x = {}
 switch(x){
    case 'caso':
       
     break;     
     default:
 }

   const prompt = require('prompt-sync')({sigint:true});
 var y = prompt ()
 switch(y){
    case 'caso':
       
     break;     
     default:
 }
/*ele pega o valor da variavel que esta entre parenteses na frente do switch e se o valor for um dos caso ele executara esse case,
se ele nao enconta nenhum caso que o valor seja igual a varivel ele executa o default */ 
 
     console.log('exemplo 1°')
var x = 5     
 switch(x){
     case 10:
         console.log('se o valor de x for 10 esse caso vai se executado')
      break;   
      case 5:
        console.log('se o valor de x for 5 esse caso vai se executado')
     break;    
      default:
          console.log('se o valor for direfente das opcoes presente esse caso vai se executado')
 }