const prompt = require('prompt-sync')({sigint:true});
  var a = prompt('insira o valor de a: ');
  var b = prompt('insira o valor de b: ');
  var c = prompt('insira o valor de c: ');
    delta = (Math.pow(Number(b),2) - 4*Number(a)*Number(c)) 
   if (delta <= 0){
       console.log('e negativo')
   }
   else{(delta >= 0)
    console.log('e positivo')
    
   }
