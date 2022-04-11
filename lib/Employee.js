

class Employee {
    constructor(name = '', id = !NaN, email = '') {
        this.name = name;
        this.id = id;
        this.email = email;
    }

getName() {
    return `${this.name}`;

}

getId() {
    return `${this.id}`;

}

getEmail() {

}

getRole() {

}


}

module.exports = Employee;
