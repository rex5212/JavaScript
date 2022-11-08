class Queue {
    constructor(){
        // propiedade count para controla o tamanho da fila
        this.count = 0
        /*como iremos remove da frente da fila, usamos o varivel
        LowestCount para manter o controle(i) do primeiro elemento*/
        this.LowestCount = 0
        // usaremos um objeto para armazenar elementos na fila 
        this.items = {}
    }
    enqueue(element){
        // incluir um elemento da fila
        this.items[this.count] = element
        this.count++
    }
    size(){
        // retorna o tamanho da fila 
        return this.count - this.LowestCount
    }
    isEmpty(){
        // retorna true se a fila estiver vazia
        return this.size() == 0
    }
    dequeue(){
        // remove o elemento da frente da fila

        // verifica se a fila esta vzia
        if(this.isEmpty()){
            return undefined
        }
        // armazenando o valor da frente da fila
        const result = this.items[this.LowestCount]
        // removendo o elemento da frente
        delete this.items[this.LowestCount]
        // será necessario incrementar a propiedade lowestcount
        this.LowestCount++
        return result

    }
    peek(){
        // mostra o elemento na frente da fila

        /*este metodo devolve o item que esta na frente da fila usando
        LowestCount como chave para obter o alor do elemento*/

        if(this.isEmpty()){
            return undefined
        }

        return this.items[this.LowestCount]
    }
    clear(){
        /*para limpar a fila, reinicializar suas propiedades do método constutor */

        this.items = {}
        this.count = 0
        this.LowestCount = 0
    }
    toString(){
        // para impirmir a fila

        /*na classe Stack, começamos a iterar pelos valores dos itens a partir doindice zero
        como o primeiro indice da classe Queue pode não ser zero, comecamos iterando a partir
        do indice LowestCount*/

        if (this.isEmpty()) {
            return undefined
        }
        let objString = `${this.items[this.LowestCount]}`
        for (let i = this.LowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }

}

const fila = new Queue()
console.log(fila.isEmpty())

fila.enqueue('Jhon')
fila.enqueue('Jack')
console.log('A fila possui inicialmente as pessoas: ' + fila.toString())

fila.enqueue('Camila')
console.log('A fila agora possui as pessoas: ' + fila.toString())
console.log('O tamanho da fila é: ' + fila.size())
console.log('Removendo a pessoa da frente da fila: ' + fila.dequeue())
console.log('A fila agora possui os elementos: ' + fila.toString())
console.log('A pessoa da frente da fila agora é: ' + fila.peek())
console.log('Retirando o próximo da fila: ' + fila.dequeue())
console.log('A fila agora possui apenas: ' + fila.toString())
console.log('A pessoa da frente da fila agora é: ' + fila.peek())

