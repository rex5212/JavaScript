/**Esse e um exemplo de classe que nada mais que uma forma que fala como os atributos iram se comporta e quais metodos sera utilizado,
 * 
 */
class Nincho {
    constructor(){
        this.nome = {}
        this.familia = {}
        this.count = 0
        this.LowestCount = 0
    }

    adiciona(especie, grupo){
        this.nome[this.count] = especie
        this.familia[this.count] = grupo
        this.count++
    }

    listar(){
        if(this.count == 1){
            let listagem  = `${this.nome[this.LowestCount]} da familia ${this.familia[this.LowestCount]}`
            return listagem
        } else {
            let listagem = `${this.nome[this.LowestCount]} da familia ${this.familia[this.LowestCount]}`
            for(let i = 1; i < this.count; i++){
                listagem = `${listagem}, ${this.nome[i]} da familia ${this.familia[i]}`
            }
            return listagem
        }
    }
    
}

let tipo = new Nincho()

tipo.adiciona("salamandra", "Repteis")
tipo.adiciona("Salmao", "Peixes")
tipo.adiciona("Lula", "Vertebado")
console.log(tipo.listar())
