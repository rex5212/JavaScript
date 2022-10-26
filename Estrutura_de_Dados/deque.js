
class Deque{
    // implementa o metodo construtor
    constructor() {
        //propiedade count para controlat o tamanho do deque
        this.count = 0
        // lowestCount para manter o controle(indice) do primeiro elemento
        this.lowestCount = 0
        // objeto items para armazenar elementos no deque
        this.items = {}
    }

    // adiciona um novo elemento na frente do duque
    addFront(element){
        //primeiro cenario verefica se o Deque está vazio
        if(this.isEmpty()){
            // nete caso chamamos o último (no final) elemento do Deque
            this.addBack(element)
        } else if (this.lowestCount > 0){
            //o elemento é removido da frente do deque
            this.lowestCount--
            this.items[this.lowestCount] = element
        } else {
            /** se lowestCount é igual a zero e para adicionar um novo elemento na primeira posição,
             * devemos mover para proxima posição e deixar o primeiro index livre 
             */
            for(var i = this.count; i > 0; i--) {
                this.items[i] = this.items[i - 1]
            }
            this.count++
            this.lowestCount = 0
            this.items[0] = element
        }
    }

    // adiciona um novo elemento no fim do deque
    addBack(element){
        this.items[this.count] = element
        this.count++
    }

    // remove o primeiro elemento do deque
    removeFront(){
        // verifica se a fila esta vazia
        if (this.isEmpty()) {
            return undefined
        }
        // armazenando o valor da frente da fila
        const result = this.items[this.lowestCount]
        // removendo o elemento da frente
        delete this.items[this.count]
        // sera necessario incrementar a propiedade lowestCount
        this.lowestCount++
        return result
    }

    // remove o ultimo elemento do deque
    removeBack(){
        if (this.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    // devolve o primeiro elementio do deque
    peekFront(){
        if (this.isEmpty()) {
            return undefined
        }
        return this.items[this.lowestCount]
    }

    // devolve o ultimo elemento do deque
    peekBack(){
        return this.items[this.items.length - 1]
    }

    // para retornar o tamanho do deque basta retornar a diferenca de count por lowestCount
    size(){
        return this.count - this.lowestCount
    }

    //veriica de o deque esta vazio
    isEmpty(){
        return this.size() === 0
    }

    // apresenta o conteudo do deque
    toString(){
        if (this.isEmpty()) {
            return undefined
        }
        let objString = `${this.items[this.lowestCount]}`
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            objString = `${objString}, ${this.items[i]}`
        }
        return objString
    }
}

const deque = new Deque()
console.log(deque.isEmpty())
deque.addBack('João')
deque.addBack('Pedro')
console.log(deque.toString())
deque.addBack('Camila')
console.log(deque.size())
console.log(deque.isEmpty())
deque.removeFront()
console.log(deque.toString())
deque.removeBack()
console.log(deque.toString())
deque.addFront('João')
console.log(deque.toString())