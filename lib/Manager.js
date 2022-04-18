const Employee = require('./Employee');

// manager class extending employee super class
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {

        super(name, id, email)


        this.officeNumber = officeNumber;
    }


    getRole() {
        return 'Manager'
    }

    
}

module.exports = Manager;