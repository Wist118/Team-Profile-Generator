const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee.js');



test('creates an employee object', () => {
    const employee = new Employee ('Dale')

    expect(employee.name).toBe('Dale');
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toBe('')
});

test('gets an employee name', () => {
    const employee = new Employee('dale')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
});

test('gets an employee ID', () => {
    const employee = new Employee(id = 5)

    expect(employee.getId()).toBe(Number);
})

