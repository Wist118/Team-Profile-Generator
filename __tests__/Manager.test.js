const Manager = require('../lib/Manager');

test('creates an Manager object', () => {
    const manager = new Manager('Dale');

    expect(manager.name).toBe('Dale');
    expect(manager.id).toBeTruthy();
    expect(manager.email).toBe('weee')
    expect(manager.role).toBe('Manager')
})