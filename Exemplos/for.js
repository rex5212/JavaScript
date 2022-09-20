/*A instrução for cria um loop que consiste em três expressões opcionais, dentro de parênteses e separadas por ponto e vírgula,
 seguidas por uma declaração ou uma sequência de declarações executadas em sequência.
     for ([inicialização]; [condição]; [expressão final]){
   declaração;
     }

   Se voçe tira a condição deve coloca break para não fica no loop infinito no final e tambem definir um 'limitador' 
  for ([inicialização]; ; [expressão final]){
   declaração;
    if (x == 10) break;
     }

  Exemplos de for (ate se tira uma ou todas as expressões):
*/
            // enquanto for verdadeiro (true) a declaração sera executada ate ser falso (false)..
           
            console.log("Esse eo primeiro exemplo de 0 a 10")
  for (i=0;i<=10;i++){
    console.log('o valor é', i)
   };
     
            console.log("esse eo segundo exemplo de 0 a 8")
   var a = 0 
  for (;a<=8;a++){
    console.log('o valor é', a)
   };

            console.log("esse eo terceiro exemplo de 0 a 6")
   var f = 0
  for ( ; ;f++){
     if (f > 6) break 
    console.log('o valor é', f)
  };         

            console.log("esse eo terceiro exemplo de 0 a 4")    
   var r = 0
  for (;;){
      if (r > 4) break
      console.log('o valor é', r)
     r++ 
  };

