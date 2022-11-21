export class Student {
    constructor({
        name,
        username,
        email,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = []
    }) {

        this.name = name
        this.username = username
        this.email = email
        this.socialMedia = {
            twitter,
            instagram,
            facebook,
        }
        this.approvedCourses = approvedCourses
        this.learningPaths = learningPaths
    }
}