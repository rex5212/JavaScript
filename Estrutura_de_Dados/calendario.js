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

let mes = 0
while(mes < 12){

    switch(mes){
        case 1:
            console.log('')
            break
        case 2:
            console.log('')
            break
        case 3:
            console.log('')
            break
        case 4:
            console.log('')
            break
        case 5:
            console.log('')
            break
        case 6:
            console.log('')
            break
        case 7:
            console.log('')
            break
        case 8:
            console.log('')
            break
        case 9:
            console.log('')
            break
        case 10:
            console.log('')
            break
        case 11:
            console.log('')
            break
        case 12:
            console.log('')
            break
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

