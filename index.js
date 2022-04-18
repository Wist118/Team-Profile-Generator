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


// question prompt to set value for generated manager
const employeePrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is the team manager's name? (Required)",
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log("Please enter the team manager's name!");
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their epmloyee id? (Required)',
                validate: idInput => {
                    if (isNaN(idInput) === false) {
                      return true;
                    } else {
                      console.log("Please enter an id number!");
                      return false;
                    }
                  }
            },

            {
                type: 'input',
                name: 'email',
                message: 'What is their email address? (Required)',
                validate: email => {
                    char = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
                    if (char) {
                        return true;
                    } else {
                        console.log('Please enter a valid email')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'officeNumber',
                message: 'What is their office number? (Required)',
                validate: officeNumberInput => {
                    if (isNaN(officeNumberInput) === false) {
                        return true;
                      } else {
                        console.log("Please enter the Manager's office number!");
                        return false;
                      }
                    }
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add an Engineer or an Intern to the team?',
                choices: ['Engineer', 'Intern', 'No'],
            }
        ])
        // destructure values then make a new manager and push it to the teamArray then prompt user if they would like to add a new employee
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

// question prompt to set value for generated engineer
const engineerPrompt = () => {
    return inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: 'What is the name of the Engineer? (Required)',
                validate: nameInput => {
                    if (nameInput) {
                      return true;
                    } else {
                      console.log("Please enter the Engineer's name!");
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                name: 'id',
                message: 'What is their employee id? (Required)',
                validate: idInput => {
                    if (isNaN(idInput) === false) {
                      return true;
                    } 
                    else if (!idInput) {
                        console.log("Please enter an id number!");
                        return false; 
                    }
                    else {
                      console.log("Please enter an id number!");
                      return false;
                    }
                  }
            },
            {
                type: 'input',
                name: 'email',
                message: 'What is their email address? (Required)',
                validate: email => {
                    char = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
                    if (char) {
                        return true;
                    } else {
                        console.log('Please enter a valid email')
                        return false;
                    }
                }
            },
            {
                type: 'input',
                name: 'github',
                message: 'What is their GitHub username? (Required)',
                validate: githubInput => {
                    if (githubInput) {
                      return true;
                    } else {
                      console.log("Please enter the Engineer's GitHub username!");
                      return false;
                    }
                  }
            },
            {
                type: 'list',
                name: 'addEmployee',
                message: 'Would you like to add another Engineer or an Intern?',
                choices: ['Engineer', 'Intern', 'No']
            }
        ])
        // destructure values then make a new engineer and push it to the teamArray then prompt user if they would like to add a new employee
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

// question prompt to set value for generated intern
const internPrompt = () => {
    return inquirer .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the Intern? (Required)',
            validate: nameInput => {
                if (nameInput) {
                  return true;
                } else {
                  console.log("Please enter the Intern's name!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'id',
            message: 'What is their employee id number? (Required)',
            validate: idInput => {
                if (isNaN(idInput) === false) {
                  return true;
                } else {
                  console.log("Please enter an id number!");
                  return false;
                }
              }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address? (Required)',
            validate: email => {
                char = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)
                if (char) {
                    return true;
                } else {
                    console.log('Please enter a valid email')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'What school do they attend? (Required)',
            validate: schoolInput => {
                if (schoolInput) {
                  return true;
                } else {
                  console.log("Please enter the Intern's school!");
                  return false;
                }
              }
        },
        {
            type: 'list',
            name: 'addEmployee',
            message: 'Would you like to add another Intern or an Engineer?',
            choices: ['Engineer', 'Intern', 'No']
        }
    ])
    // destructure values then make a new intern and push it to the teamArray then prompt user if they would like to add a new employee
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
// function call to generate html page with teamArray values and copy css for styling
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