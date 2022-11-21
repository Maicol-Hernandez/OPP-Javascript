import { Person } from "./Person.js";

export class Teacher extends Person {
    constructor(first, last, age, gender, interests, subject, grade) {
        super(first, last, age, gender, interests)

        // subject and grade are specific to Teacher
        this._subject = subject
        this.grade = grade

    }

    get subject() {
        return this._subject
    }
    set subject(subject) {
        this._subject = subject
    }

}