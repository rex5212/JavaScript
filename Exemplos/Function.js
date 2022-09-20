/* Função ,um tipo de objeto especial do Js,Uma função é um objeto que tem
código executável associado. Uma função pode ser chamada para executar um código executável e retornar
um valor calculado, para decarar usa function.
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Function 
   https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/return
*/  

       console.log('exemplo 1°')
  function exemplo(){
      console.log('essa e uma estutura basica de function')
  };
    exemplo();

       console.log('exemplo 2°')
  function exemplosoma(valora, valorb){   
       console.log(valora + valorb)
  };  
     exemplosoma(5,2);
/*o valor foi dado quando a funçao foi chamada o valora foi decidido como 5 e o valorb foi 2,
 seguindo a ordem que as variaveis se encontao
*/

       console.log('exemplo 3°')
  function exemplocomreturn(num1, num2){
    resultado = num1 * num2
       return (resultado) 
  } 
     exemplocomreturn(2,5)
      metadedototal = resultado / 2
     console.log('a metade do total deu: ',metadedototal) 
    
 //com return ela retorna para fora oque escolhe.
 