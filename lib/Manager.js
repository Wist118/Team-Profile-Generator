const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name = '') {

        super(name)


        this.officeNumber = !NaN;
    }


    getRole() {
        return 'Manager'
    }

    
}