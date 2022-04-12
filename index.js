// packages needed for this application
const inquirer = require('inquirer');
const generateHTML = require('./')
const fs = require('fs');
const Employee = require('./lib/Employee');

// question to set value for generated employee
const employeePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'managerName',
                message: "What is the team manager's name?"
            },
            {
                type: 'input',
                name: 'managerId',
                message: 'What is their eployee id?'
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'What is thier email address',
            },
            {
                type: 'input',
                name: 'managerOfficeNumber',
                message: 'What is thier office number?'
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an Engineer or an Intern to the team?',
                choices: ['Engineer', 'Intern', 'No'],
            }
        ])

        .then(managerData => {
            if (managerData.addEmployee === 'Engineer') {
                return engineerPrompt()
            }
            else if (managerData.addEmployee === 'Intern') {
                return internPrompt()
            }
            else {
                return managerData;
            }
        });
};

const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is the name of the Engineer?'
            },
            {
                type: 'input',
                name: 'engineerId',
                message: 'What is their employee id?'
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is thier email address'
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
            if (engineerData.addEmployee === 'Engineer') {
                return engineerPrompt()
            }
            else if (engineerData.addEmployee === 'Intern') {
                return internPrompt()
            }
            else {
                return engineerData;
            }
        });
}

const internPrompt = () => {
    return inquirer .prompt([
        {
            type: 'input',
            name: 'internName',
            message: 'What is the name of the Intern?'
        },
        {
            type: 'input',
            name: 'internId',
            message: 'What is their employee id?'
        },
        {
            type: 'input',
            name: 'internEmail',
            message: 'What is thier email address'
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
        if (internData.addEmployee === 'Engineer') {
            return engineerPrompt()
        }
        else if (internData.addEmployee === 'Intern') {
            return internPrompt()
        }
        else {
            return internData;
        }
    });
}

emplyeePrompt();