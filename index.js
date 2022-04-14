// packages needed for this application
const inquirer = require('inquirer');
const generateHTML = require('./')
const fs = require('fs');

//
const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

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
                message: 'What is thier email address',
            },
            {
                type: 'input',
                name: 'officeNumber',
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
            const { name, id, email, officeNumber } = managerData;
            const manager = new Manager(name, id, email, officeNumber);
            
            teamArray.push(manager);

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
            const { name, id, email, officeNumber } = engineerData;
            const engineer = new Engineer(name, id, email, officeNumber);
            
            teamArray.push(engineer);

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
        const { name, id, email, officeNumber } = internData;
        const intern = new Intern(name, id, email, school);
        
        teamArray.push(intern);

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

emplyeePrompt();