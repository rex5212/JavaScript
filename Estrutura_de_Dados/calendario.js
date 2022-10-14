/*
var calendario = []

for(ano = 1; ano < 2; ano++){ //ano
    calendario[ano] = []

    for(mes = 0; mes < 12; mes++){ //mes
        calendario[ano][mes] = []

        for(dia = 0; dia < 30; dia++){
            
            calendario[ano][mes][dia] = 1 + dia
        }
    }

}

console.log(calendario)
*/


// professor

let mes = 1
while(mes < 13){

    switch(mes){
        case 1: console.log('Janeiro'); break
        case 2: console.log('Fevereiro'); break
        case 3: console.log('Março'); break
        case 4: console.log('Abril'); break
        case 5: console.log('Maio'); break
        case 6: console.log('Junho'); break
        case 7: console.log('Julho'); break
        case 8: console.log('Agosto'); break
        case 9: console.log('Setembro'); break
        case 10: console.log('Outubro'); break
        case 11: console.log('Novembro'); break
        case 12: console.log('Dezembro'); break
    }



    let dia = 1

    console.log('D ', 'S ', 'T ', 'Q ', 'Q ', 'S ', 'S ')
    
    for (let linha = 0; linha < 6; linha++){
        for (let coluna = 2; coluna < 7; coluna++){
            console.log(dia + " ")
            dia++
        }

    }

mes++
}

