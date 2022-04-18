const Engineer = require('../lib/Engineer.js')


test('creates an Engineer object', () => {
    const engineer = new Engineer ('Dale', 1, 'someone@something.com', 'mygithub')

    expect(engineer.name).toBe('Dale');
    expect(engineer.id).toBe(1);
    expect(engineer.email).toBe('someone@something.com')
    expect(engineer.github).toBe('mygithub')
});

test('gets an Engineer name', () => {
    const engineer = new Engineer ('Dale', 1, 'someone@something.com')

    expect(engineer.getName()).toEqual(expect.stringContaining(engineer.name))
});

test('gets an Engineer ID', () => {
    const engineer = new Engineer ('Dale', 1, 'someone@something.com')

    expect(engineer.getId()).toBe(JSON.stringify(engineer.id));
})

test('gets an Engineer email', () => {
    const engineer = new Engineer ('Dale', 1, 'someone@something.com')

    expect(engineer.getEmail()).toEqual(expect.stringContaining(engineer.email))
})

test('gets the role of Engineer', () => {
    const engineer = new Engineer('Dale')
    engineer.role = 'Engineer'

    expect(engineer.getRole()).toBe('Engineer')
})