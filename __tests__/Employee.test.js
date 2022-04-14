const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee.js');



test('creates an employee object', () => {
    const employee = new Employee ('Dale')

    expect(employee.name).toBe('Dale');
    expect(employee.id).toBeTruthy();
    expect(employee.email).toBe('')
});

test('gets an employee name', () => {
    const employee = new Employee('Dale')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
});

test('gets an employee ID', () => {
    const employee = new Employee('Dale')

    expect(employee.getId()).toBeTruthy();
})

test('gets an employee email', () => {
    const employee = new Employee('Dale')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
})

test('gets the role of Employee', () => {
    const employee = new Employee('Dale')
    employee.role = 'Employee'

    expect(employee.getRole()).toBe('Employee')
})

