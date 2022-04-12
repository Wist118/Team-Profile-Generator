const { test, expect } = require("@jest/globals");
const Employee = require('../lib/Employee.js');



test('creates an employee object', () => {
    const employee = new Employee ('Dale', 5, 'weee')

    expect(employee.name).toBe('Dale');
    expect(employee.id).toBeTruthy();
    expect(employee.email).toBe('weee')
});

test('gets an employee name', () => {
    const employee = new Employee('Dale', 5, 'weee')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
});

test('gets an employee ID', () => {
    const employee = new Employee('Dale', 5, 'weee')

    expect(employee.getId()).toBeTruthy();
})

test('gets an employee email', () => {
    const employee = new Employee('Dale', 5, 'weee')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
})

test('gets the role of Employee', () => {
    const employee = new Employee('Dale', 5, 'weee', 'Employee')

    expect(employee.getRole()).toEqual(expect.stringContaining(employee.role))
})

