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

    intersection(otherSet) {
        const intersectionSet = new Set()
        const values = this.values()
        for (let i = 0; i < values.length; i++) {
            if (otherSet.has(values[i])) {
                intersectionSet.add(values[i])
            }
        }
        return intersectionSet
    }

    otherintersection(otherSet) {
        //
        const intersectionSet = new Set()
        //
        const values = this.values()
        /** */
        const otherValues = otherSet.values()
        //
        let biggerSet = values
        //
        let smallerSet = otherValues
        //
        if (otherValues.length - values.length > 0){
            biggerSet = otherValues
            smallerSet = values
        }
        /** */
        smallerSet.forEach((value) => {
            if (biggerSet.includes(value)) {
                intersectionSet.add(value)
            }
        })
        return intersectionSet
    }

    difference(otherSet) {
        const differenceSet = new Set()
        this.values().forEach((value) => {
            if (!otherSet.has(value)) {
                differenceSet.add(value)
            }
        })
        return differenceSet
    }

    isSubsetOf(otherSet) {
        /** */
        if (this.size() > otherSet.size()) {
            return false
        }
        /** */
        let isSubset = true
        //
        this.values().every(value => {
            //
            if (!otherSet.has(value)) {
                /** */
                isSubset = false
                return false
            }
            return true
        })
        return isSubset
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

console.log('-------------------------------')

const setC = new Set()
setC.add(1)
setC.add(2)
setC.add(3)

const setD = new Set()
setD.add(2)
setD.add(3)
setD.add(4)

const intersectionCD = setC.intersection(setD)
console.log(intersectionCD.values())

console.log('-------------------------------')

const setE = new Set()
setE.add(1)
setE.add(2)
setE.add(3)
setE.add(4)
setE.add(5)
setE.add(6)
setE.add(7)

const setF = new Set()
setF.add(4)
setF.add(6)

const intersectionEF = setE.otherintersection(setF)
console.log(intersectionEF.values())

console.log('-------------------------------')

const setG = new Set()
setG.add(1)
setG.add(2)
setG.add(3)

const setH = new Set()
setH.add(2)
setH.add(3)
setH.add(4)

const differenceGH = setG.difference(setH)
console.log(differenceGH.values())

const differenceHG = setH.difference(setG)
console.log(differenceHG.values())

console.log('-------------------------------')

const setI = new Set()
setI.add(1)
setI.add(2)

const setJ = new Set()
setJ.add(1)
setJ.add(2)
setJ.add(3)

const setK = new Set()
setK.add(2)
setK.add(3)
setK.add(4)

console.log(setI.isSubsetOf(setJ))
console.log(setI.isSubsetOf(setK))