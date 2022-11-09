class Set {

    constructor() {
        this.items = {}
    }

    has(element) {
        //
        return element in this.items
    }

    add(element) {
        //
        if (!this.has(element)) {
            this.items[element] = element
            return true
        }
        return false
    }

    delete(element) {
        //
        if (this.has(element)) {
            delete this.items[element]
            return true
        }
        return false
    }

    clear() {
        //
        this.items = {}
    }

    size() {
        //
        return Object.keys(this.items).length
    }

    sizeLegacy() {
        let count = 0
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                count++
            }
        }
        return count
    }

    values() {
        //
        return Object.values(this.items)
    }

    valuesLegacy() {
        let values = []
        for (let key in this.items) {
            if (this.items.hasOwnProperty(key)) {
                values.push(key)
            }
        }
        return values
    }

    union(otherSet) {
        const unionSet = new Set()
        this.values().forEach((value) => unionSet.add(value))
        otherSet.values().forEach((value) => unionSet.add(value))
        return unionSet
    }

    otherUnion(otherSet) {
        const unionSet = new Set()
        let values = this.values()
        for (let i = 0; i < values.length; i++) {
            unionSet.add(values[i])
        }
        values = otherSet.values()
        for (let i = 0; i < value.length; i++) {
            unionSet.add(values[i])
        }
        return unionSet
    }
}

const set = new Set()
set.add(1)
console.log(set.values())
console.log(set.has(1))
console.log(set.size())
console.log(set.sizeLegacy())
set.add(2)
console.log(set)
console.log(set.values())
console.log(set.has(1))
console.log(set.size())
console.log(set.sizeLegacy())
console.log(set.delete(1))
console.log(set.values())
console.log(set.delete(2))
console.log(set.values())

console.log('-------------------------------')

const setA = new Set()
setA.add(1)
setA.add(2)
setA.add(3)
console.log(setA.values())

const setB = new Set()
setB.add(3)
setB.add(4)
setB.add(5)
setB.add(6)
console.log(setB.values())

const unionAB = setA.union(setB)
console.log(unionAB.values())
