// packages needed for this application
const inquirer = require('inquirer');
const generateHTML = require('./')
const fs = require('fs');

//
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

//
const createPage = require('./src/generateHTML.js');

// create empty array to push employee object data into
const teamArray = [];


// question to set value for generated employee
const employeePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their eployee id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address',
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number?'
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an Engineer or an Intern to the team?',
                choices: ['Engineer', 'Intern', 'No'],
            }
        ])

        .then(managerData => {
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);
            
            teamArray.push(manager);
            console.log(manager);

            if (managerData.addEmployee === 'Engineer') {
                return engineerPrompt(teamArray)
            }
            else if (managerData.addEmployee === 'Intern') {
                return internPrompt(teamArray)
            }
            else {
                return teamArray;
            }
        });
};

const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Engineer?'
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their employee id?'
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address'
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username?'
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add another Engineer or an Intern?',
                choices: ['Engineer', 'Intern', 'No']
            }
        ])

        .then(engineerData => {
            const { name, id, email, github } = engineerData;
            const engineer = new Engineer(name, id, email, github);
            
            teamArray.push(engineer);
            console.log(engineer);

            if (engineerData.addEmployee === 'Engineer') {
                return engineerPrompt(teamArray)
            }
            else if (engineerData.addEmployee === 'Intern') {
                return internPrompt(teamArray)
            }
            else {
                return teamArray;
            }
        });
}

const internPrompt = () => {
    return inquirer .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern?'
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id?'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address'
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend?'
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another Intern or an Engineer?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])

    .then(internData => {
        const { name, id, email, school } = internData;
        const intern = new Intern(name, id, email, school);
        
        teamArray.push(intern);
        console.log(intern);

        if (internData.addEmployee === 'Engineer') {
            return engineerPrompt(teamArray)
        }
        else if (internData.addEmployee === 'Intern') {
            return internPrompt(teamArray)
        }
        else {
            return teamArray;
        }
    });
}

employeePrompt()
    .then(teamArray => {

        fs.writeFile('./dist/index.html', createPage(teamArray), err => {
            if (err) {
                console.log(err);
                return;
            }
            console.log('Created team page')
            fs.copyFile('./src/style.css', './dist/style.css', err => {
                if (err) {
                    console.log(err);
                    return;
                }
            })
        })
    })