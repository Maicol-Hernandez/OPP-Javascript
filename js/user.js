const user = {
    name: 'Michael',
    lastName: 'Jordan',
    age: 30,
    showFullName() {
        return `${this.name} ${this.lastName}`
    }

}

const mankind = {
    Person: function() {
        "use strict"
        this.name = String()
        this.lastName = String()
        this.age = Number()
        this.showFullName = () => {
            return `${this.name} ${this.lastName}`
        }
    }
}

const person = new mankind.Person()

console.log('person :>> ', person);
console.log('mankind :>> ', mankind);


/**
 * ---------------------------
 */

const string = new Object('Hollo world')
string.name = 'Special String'
string.test = function () {
    return `${this} test`
}

const userFull = {
    name: "Ryan",
    lastName: 'Ray',
    age: 30,
    showFull(nombre) {
        return nombre
    }
};
console.log('userFull :>> ', userFull);
// console.log('Object :>> ', Object.values(userFull));
export { userFull }
