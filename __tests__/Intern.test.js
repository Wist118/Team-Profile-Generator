const Intern = require('../lib/intern.js')


test('creates an intern object', () => {
    const intern = new Intern ('Dale', 1, 'someone@something.com', 'myschool')

    expect(intern.name).toBe('Dale');
    expect(intern.id).toBe(1);
    expect(intern.email).toBe('someone@something.com')
    expect(intern.school).toBe('myschool')
});

test('gets an intern name', () => {
    const intern = new Intern ('Dale', 1, 'someone@something.com')

    expect(intern.getName()).toEqual(expect.stringContaining(intern.name))
});

test('gets an intern ID', () => {
    const intern = new Intern ('Dale', 1, 'someone@something.com')

    expect(intern.getId()).toBe(JSON.stringify(intern.id));
})

test('gets an intern email', () => {
    const intern = new Intern ('Dale', 1, 'someone@something.com')

    expect(intern.getEmail()).toEqual(expect.stringContaining(intern.email))
})

test('gets the role of intern', () => {
    const intern = new Intern('Dale')
    intern.role = 'Intern'

    expect(intern.getRole()).toBe('Intern')
})