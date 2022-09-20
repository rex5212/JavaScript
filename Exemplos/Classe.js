/* ao criar um classe nova se deve coloca class, o nome da classe e entre as chaves se coloca o construtor da classe escrevendo
constructor e fala que tipos de dados vai te nessa classe*/
class exemplo{
    constructor(exemplo1, exempolo2, exemplo3){
      this.exemplo1 = exemplo1
      this.exempolo2 = exempolo2
      this.exemplo3 = exemplo3
      // this. seja para especifica que e esse valor
    }
}
 var exemplio = new exemplo ('exeploo1', 122, 'exempolo3')
  console.log(exemplio)
 class exemplo2 extends exemplo{
     constructor(exemplo1, exempolo2, exemplo3, exemploo4){
         super (exemplo1, exempolo2, exemplo3)
         this.exemploo4 = exemploo4
     }
 }
 var exemplo222 = new exemplo2 ('sfsd',636,'sdfsd','affs')
  console.log(exemplo222)
   console.log('testa uma coisa aqui')
    console.log(exemplo)