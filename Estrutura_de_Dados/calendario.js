var calendario = []

for(ano = 1; ano < 2; ano++){ //ano
    calendario[ano] = []
    for(diaC = 0; diaC < 12; diaC++){ //mes
        calendario[ano][diaC] = []
        if (diaC)
        for(mes = 0; mes < 31; mes++){
            calendario[ano][diaC][mes] = ano + mes
        }
        for(mes = 0; mes < 31; mes++){
            calendario[ano][diaC][mes] = ano + mes
        }
    }

}

console.log(calendario)