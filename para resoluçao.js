/*const prompt = require('prompt-sync')({sigint:true});
 var vetor = [3,12,4,15,1,2,7,8]
  function getMaxOfArray(vetor) {
  return Math.max.apply(null, vetor);
}
 console.log(getMaxOfArray(vetor))
  //incompleta
  */

 var Anacleto = [1,50]   //1,50; +0,2 por ano
 var felisberto = [1,10] //1,10; +0,3 por ano
 var ano = 0
   //felisberto > Anacleto
   while (felisberto < Anacleto) {
    Anacleto = Number(Anacleto) + 2;
    felisberto = Number(felisberto) + 3;
    ano++ 
   }
   console.log('demorou', ano,'anos para felisberto se maior que Anacleto')
    //não consergui
  