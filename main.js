import { Company } from "./js/Encapsulacion/encapsulacion.js"; //Encapsulacion
import { Person } from './js/Herencia/Person.js' // Herencia
import { Teacher } from './js/Herencia/Teacher.js' // Herencia
import { LearningPath } from "./js/Abstraccion/LearningPath.js"; // Abstraccion
import { Student } from "./js/Abstraccion/Student.js"; // Abstraccion



/**
 * Encapsulacion
 */
const company = new Company('Coca-cola', [{ name: 'Maicol', lastName: 'Hernandez' }])
// console.log(company);
// console.log("oldvalue", company.getEmployees);
// company.setEmployees = [{ name: 'Michael', lastName: 'Hernandez' }]
// console.log("newvalue", company.getEmployees);

/**
 * Herencia -> Person
 */
const han = new Person('Han', 'Solo', 25, 'male', ['Smuggling'])
// han.greeting()
const leia = new Person('Leia', 'Organa', 19, 'female'['Government'])
// leia.farewell()

/**
 * Herencia -> Teacher
 */
const snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5)
snape.greeting()
snape.farewell()
// console.log('snape.age :>> ', snape.age);
// Check the default value
// console.log('snape.subject :>> ', snape.subject); // Returns "Da rk arts"
// Change the value 
snape.subject = 'Balloon animals' // Sets _subject to "Balloon animals"
// console.log(snape.subject) // Returns "Balloon animals"


/**
 * Abstraccion -> LearningPath
 */

const escuelaWeb = new LearningPath({
    name: "Escuela de desarrollo web",
    courses: [
        "Curso definitivo de HTML y CSS",
        "Curso practivo de HTML y CSS"
    ]
})

const escuelaData = new LearningPath({
    name: "Escuela de Data Science",
    courses: [
        "Curso DataBusiness",
        "Curso Dataviz"
    ]
})


const escuelaVgs = new LearningPath({
    name: "Escuela de Video juegos",
    courses: [
        "Curso de Unity",
        "Curso de Unreal"
    ]
})


/**
 * Abstraccion -> Student
 */

 const maicol = new Student({
    name: "Michael Fernando Hernandez Peralta",
    username: "maikHernandez",
    email: "maicolhernandez420@gmail.com",
    twitter: "maikHernandez",
    learningPaths: [
        escuelaData,
        escuelaVgs
    ]

})

const camilo = new Student({
    name: "Andres Camilo Hernandez Peralta",
    username: "AndresHernandez",
    email: "andreshernandez420@gmail.com",
    instagram: "Andres_Hernandez",
    learningPaths: [
        escuelaData,
        escuelaWeb
    ]

})
