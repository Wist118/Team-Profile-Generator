const Employee = require('./Employee');

// intern class extending employee super class
class Intern extends Employee {
    constructor(name, id, email, school) {

        super(name, id, email)

        this.school = school;
    }

    getRole() {
        return 'Intern'
    }
}

module.exports = Intern;