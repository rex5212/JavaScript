//bem vindo a meu facilitado de formas geometricas esta faltando muitas formulas e figuras geometrica, mas e isso
const prompt = require('prompt-sync')({sigint:true});
const pi = 3.14
  
 var escolha = prompt('Tem disponivel cubo, cilindro, esfera, escolha qual das formas geometrica deseja calcular: ')
  switch(escolha){
    case 'cubo':
      aresta = prompt ('Valor da aresta do cubo: ')
     areabasecubo(aresta)
     arealateralcubo(aresta)
     areatotalcubo(aresta)
       console.log('esses sao os valores da area lateral', Al,',da base', Ab,',e da area total', At)
     break;
      // não sei se as formulas tao corretas
    case  'cilindro':
      h = prompt ('Altura do calindro: ')
      r = prompt('Raio do cilindro: ')
    areadabasecilindro(h,r)
    arealateralateral(h,r)
    areatotalcilindro(h,r)
    volumecilindro(h,r)
    console.log('esses sao os valores da area lateral', Al,',da base', Ab,',da area total', At,'e do Volume', V)
     break;
    case 'esfera':
      r = prompt('Raio da esfera: ') 
      areaesfera(r)
      volumeesferaVe(r)
      console.log('Essa e a area da esfera',Ae,'e o Volume',Ve)
     break;
    }

  //cubo
function areatotalcubo(aresta){
  At = 6 * Math.pow(aresta, 2)
   return At
}
function areabasecubo(aresta){
   Ab = Math.pow(aresta, 2)
   return Ab
}
function arealateralcubo(aresta){
  Al = 4 * Math.pow(aresta, 2)
   return Al
}

// cilindro
function areadabasecilindro(){
  Ab = pi * Math.pow(r, 2)
  return Ab
}
function arealateralateral(){
  Al = 2 * pi * r * h
  return Al
}
function areatotalcilindro(){
  At =  2 * Ab + Al
  return At
}
function volumecilindro(){
  V = Ab * h
  return V
}

//  esfera 
function areaesfera(){
  Ae = 4  * pi  * Math.pow(r, 2)
  return Ae
}
function volumeesferaVe(){
  Ve = 4 * pi * Math.pow(r, 3) / 3
  return Ve
}
