const Manager = require('../lib/manager.js')


test('creates an manager object', () => {
    const manager = new Manager ('Dale', 1, 'someone@something.com', 23)

    expect(manager.name).toBe('Dale');
    expect(manager.id).toBe(1);
    expect(manager.email).toBe('someone@something.com')
    expect(manager.officeNumber).toBe(23)
});

test('gets an manager name', () => {
    const manager = new Manager ('Dale', 1, 'someone@something.com')

    expect(manager.getName()).toEqual(expect.stringContaining(manager.name))
});

test('gets an manager ID', () => {
    const manager = new Manager ('Dale', 1, 'someone@something.com')

    expect(manager.getId()).toBe(JSON.stringify(manager.id));
})

test('gets an manager email', () => {
    const manager = new Manager ('Dale', 1, 'someone@something.com')

    expect(manager.getEmail()).toEqual(expect.stringContaining(manager.email))
})

test('gets the role of manager', () => {
    const manager = new Manager('Dale')
    manager.role = 'Manager'

    expect(manager.getRole()).toBe('Manager')
})