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
    <div class="col-3">
        <div class="">manager</div>
        <div>${manager.name}</div>
        <ul>
            <li>${manager.email}</li>
            <li>${manager.id}</li>
            <li>${manager.officeNumber}</li>
        </ul>
    </div>
    `;
};

const generateEngineer = engineer => {
    return `
    <div class="col-3">
        <div class="">Engineer</div>
        <div>${engineer.name}</div>
        <ul>
            <li>${engineer.email}</li>
            <li>${engineer.id}</li>
            <li>${engineer.github}</li>
        </ul>
    </div>
    `;
};

const generateIntern = intern => {
    return `
    <div class="col-3">
        <div class="">Intern</div>
        <div>${intern.name}</div>
        <ul>
            <li>${intern.email}</li>
            <li>${intern.id}</li>
            <li>${intern.school}</li>
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
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link
      rel="stylesheet"
      href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    />
    <link
      rel="stylesheet"
      href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
      integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
      crossorigin="anonymous"
    />
    <link rel="stylesheet" href="./src/style.css" />
    <title>Team Member Page</title>
  </head>

  <body>
    <header class="jumbotron">
      <h1 class="">Team Member Contacts</h1>
    </header>
    <div class="row">
        ${cardArray}
      </div>
    `
}



module.exports = createPage;