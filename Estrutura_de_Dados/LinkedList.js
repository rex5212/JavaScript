//
function LinkedList() {
    //
    let Node = function (element) {
        this.element = element
        this.next = null
    }
    let length = 0
    let head = null

    this.append = function (element) {
        // cria um novo Node passando element
        const node = new Node(element)
        let current = null
        if (head === null) {
            head = node
        } else {
            current = head
            while (current.next) {
                //
                current = current.next
            }
            //
            current.next = node
        } //
        length++
    }

    this.insert = function (position, element) {
        //
        if (position >= 0 && position <= length) {
            let node = new Node(element)
            current = head
            previous = null
            index = 0
            //
            if (position === 0) {
                node.next = current
                head = node
            } else {
                previous = this.getElementAt(position - 1)
                current = previous.next
                node.next = current
                previous.next = node
            }
            length++ //
            return true
        } else {
            return false
        }
    }

    this.getElementAt = function (position) {
        /** */
        if (position >= 0 && position <= this.size()) {
            let node = head
            for (let i = 0; i < position && node != null; i++) {
                node = node.next
            }
            return node
        }
        return undefined
    }

    this.remove = function (element) {
        //
        let index = this.indexOf(element)
        this.removeAt(index)
    }

    this.removeAt = function (position) {
        //verifica valores fora do intervalo
        if (position > -1 && position < length) {
            let current = head
            previous = null
            //
            if (position === 0) {
                head = current.next
            } else {
              
              previous = this.getElementAt(position - 1)
              current = previous.next
              previous.next = current.next

              //
             /* for (var i = 0; i < position; i++) {
                previous = current

                current = current.next
               }
              previous.next = current.next*/
              
            }
            length--
            return current.element
        } else {
            return null
        }
    }

    this.indexOf = function (element) {
        /** */
        let current = head
        let index = 0
        while (current) {
            if (element === current.element) {
                return index
            }
            index++
            current = current.next
        }
        return -1
    }

    this.isEmpty = function () {
        //
        return length === 0
    }

    this.size = function () {
        //
        return length
    }

    this.getHead = function () {
        //
        return head
    }

    this.toString = function () {
        //
        let current = head
        string = ''
        while (current) {
            string += current.element + (current.next ? ' -> ' : ' ')
            current = current.next
        }
        return string
    }
    
}

let listaEncadeada = new LinkedList()
console.log(listaEncadeada.toString())
listaEncadeada.append('João')
console.log('Inserimos Joaõ na lista, veja: ' + listaEncadeada.toString())
listaEncadeada.append('José')
listaEncadeada.append('Maria')
listaEncadeada.append('Pedro')
listaEncadeada.append('Antônio')
console.log('Veja agora os elementos da lista: ' + listaEncadeada.toString())
listaEncadeada.insert(4, 'Lucas')
console.log('Inserimos Lucas na posiçâo 4, veja: ' + listaEncadeada.toString())
listaEncadeada.append('Davi')
listaEncadeada.insert(0, 'Marcos')
console.log('Inserimos Marcos no início da lista, veja: ' + listaEncadeada.toString())
listaEncadeada.removeAt(2)
console.log('Removendo o elemento José da posição 2: ' + listaEncadeada.toString())
listaEncadeada.remove('Antônio')
console.log('Removemos Antônio e a lista agora é: ' + listaEncadeada.toString())
listaEncadeada.remove('Pedro')
console.log('Removemos Pedro e a lista agora é: ' + listaEncadeada.toString())
listaEncadeada.remove('João')
console.log('Removemos João e a lista agora é: ' + listaEncadeada.toString())
listaEncadeada.remove('Maria')
console.log('Removemos Maria e a lista agora é: ' + listaEncadeada.toString())
console.log('Removemos Maria e a lista agora está vazia?: ' + listaEncadeada.isEmpty())
console.log('Tamanho da lista agora é: ' + listaEncadeada.size())
console.log('O primeiro da lista agora é: ' + listaEncadeada.getHead().element)
console.log('O endereço de Davi: ' + listaEncadeada.indexOf('Davi'))
console.log('O elemento da lista que está na posição 1 é: ' + listaEncadeada.getElementAt(1).element)