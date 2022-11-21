/**
 * Encapsulacion
 */

export class Company {
    constructor(name, employees) {
        this._employees = employees
        this.name = name
    }
    get getEmployees() {
        return this._employees
    }
    /**
     * @param {any} employees
     * 
     */
    set setEmployees(employees) {
        this._employees = employees
    }
}

