createPage = (data) => {

    pageArr = [];

    for (let i = 0; i < data.length; i ++) {
        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerProfile = generateManager(employee);

            pageArr.push(managerProfile);
        }

        if (role === 'Engineer') {
            const engineerProfile = generateEngineer(employee);

            pageArr.push(engineerProfile);
        }

        if (role === 'Intern') {
            const internProfile = generateIntern(employee);

            pageArr.push(internProfile);
        }
    }

    const cardArray = pageArr.join('')

    const generateEmployee = generateHTML(cardArray);
    return generateEmployee;
}


const generateManager = manager => {
    return `
    <div class="col-3 manager">
        <div class="text-center bg-danger role">Manager</div>
        <div class="text-center name">${manager.name}</div>
        <ul class="list-unstyled info">
            <li>
                <a href="${manager.email}">Email: ${manager.email}</a>
            </li>
            <li>Id number: ${manager.id}</li>
            <li>Office number: ${manager.officeNumber}</li>
        </ul>
    </div>
    `;
};

const generateEngineer = engineer => {
    return `
    <div class="col-3 engineer">
        <div class="text-center bg-success role">Engineer</div>
        <div class="text-center name">${engineer.name}</div>
        <ul class="list-unstyled info">
        <li>
            <a href="${engineer.email}">Email: ${engineer.email}</a>
        </li>
            <li>Id number: ${engineer.id}</li>
            <li>
                <a href="https://github.com/${engineer.github}">GitHub: ${engineer.github}</a>
            </li>
        </ul>
    </div>
    `;
};

const generateIntern = intern => {
    return `
    <div class="col-3 intern">
        <div class="text-center bg-info role">Intern</div>
        <div class="text-center name">${intern.name}</div>
        <ul class="list-unstyled info">
        <li>
            <a href="${intern.email}">Email: ${intern.email}</a>
        </li>
            <li>Id number: ${intern.id}</li>
            <li>School: ${intern.school}</li>
        </ul>
    </div>
    `;
};

const generateHTML = function (cardArray) {
    return `
    <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" /><link rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"/><link
      rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" 
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous"/>
      <link rel="stylesheet" href="./style.css">
    <title>Team Member Page</title>
  </head>

  <body>
    <header class="jumbotron">
      <h1 class="bg-primary">Team Member Contacts</h1>
    </header>
    <div class="row">
        ${cardArray}
      </div>
    `
}



module.exports = createPage;