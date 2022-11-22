function DobleLinkedList() {
    let Node = function (element) {
        this.element = element
        this.next = null
        this.prev = null
    }
    let length = 0
    let head = null
    let tail = null

    this.insert = function (position, element) {
        if (position >= 0 && position <= length) {
            let node = new Node(element)
            current = head
            previous = null
            //
            if (position === 0) {
                if (!head) {
                    //
                    head = node
                    tail = node
                } else {
                    node.next = current //
                    current.prev = node //
                    head = node //
                }
            } else if (position === length) {
                //
                current = tail //
                current.next = node 
                node.prev = current
                tail  = node //
                } else {
                    //
                    previous = this.getElementAt(position - 1)
                    current = previous.next
                    node.next = current
                    previous.next = node
                    //
                    current.prev = node
                    node.prev = previous
            }
            length++ //
            return true
        } else {
            return false
        }
    }

    this.append = function (element) {
        // cria um novo Node passando element
        const node = new Node(element)
        //
        let current = null
        if (head === null) {
            head = node //
            tail = node //
        } else {
            /** */
            current = head
            while (current.next) {
                //
                current = current.next
            }
            //
            current.next = node
            tail = node // new
        } //
        length++
    }

    this.removeAt = function (position) {
        //verifica valores fora do intervalo
        if (position > 0 && position < length) {
            let current = head
            previous
            //
            if (position === 0) {
                head = current.next
                //
                if (length === 1)  {
                    tail = null
                } else {
                    head.prev = null
                }
            } else if (position === length - 1) {
                /** */
                curent = tail
                tail = current.prev
                tail.next = null
            } else {
              //
              previous = this.getElementAt(position - 1)
              //
              current = previous.next
              previous.next = current.next
              current.next.prev = previous
            }
            length--
            return current.element
        } else {
            return null
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