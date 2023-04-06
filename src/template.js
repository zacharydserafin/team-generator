const team = require('../index');
const fs = require('fs');

function createCards(team) {
    var cards = [];
    for (const member of team) {
        if (member.role === "Manager") {
            const managerHTML = 
            `\t\t\t<div class="m-5 zs-card">
                <div class="p-2 zs-card-header text-start">
                    <h3>${member.name}</h3>
                    <h4>&#128084; ${member.role}</h4>
                </div>
                <div class="p-2 zs-card-body">
                    <p>ID: ${member.id}</p>
                    <p>Email: 
                        <a href="mailto: ${member.email}">${member.email}</a>
                    </p>
                    <p>Office Number: ${member.officeNumber}</p>
                </div>
            </div>`;
            cards.push(managerHTML);
        }
        if (member.role === "Engineer") {
            const engineerHTML = 
            `\t\t\t<div class="m-5 zs-card">
                <div class="p-2 zs-card-header text-start">
                    <h3>${member.name}</h3>
                    <h4>&#128083; ${member.role}</h4>
                </div>
                <div class="p-2 zs-card-body">
                    <p>ID: ${member.id}</p>
                    <p>Email: 
                        <a href="mailto: ${member.email}">${member.email}</a>
                    </p>
                    <p>GitHub: 
                        <a href="https://github.com/${member.github}">${member.github}</a>
                    </p>
                </div>
            </div>`;
            cards.push(engineerHTML);
        }
        if (member.role === "Intern") {
            const internHTML = 
            `\t\t\t<div class="m-5 zs-card">
                <div class="p-2 zs-card-header text-start">
                    <h3>${member.name}</h3>
                    <h4>&#127891; ${member.role}</h4>
                </div>
                <div class="p-2 zs-card-body">
                    <p>ID: ${member.id}</p>
                    <p>Email: 
                        <a href="mailto: ${member.email}">${member.email}</a>
                    </p>
                    <p>School: ${member.school}</p>
                </div>
            </div>`;
            cards.push(internHTML);
        }
    }
    return cards.join("\n");
}

function compileHTML(cards) {
    const html =
    `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>My Team Profile</title>
    </head>
    <body>
        <header class="text-center zs-header">My Team</header>
        <div class="container text-center d-flex flex-wrap justify-content-center">
${cards}
        </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossorigin="anonymous"></script>
    </body>
</html>`;
return html;
}

function createHTML(html) {
    fs.writeFile("./dist/index.html", html, (err) =>
    err ? console.error(err) : console.log('Successfully created HTML!')
    );
}

function generateHTML(team) {
    createHTML(compileHTML(createCards(team)));
}

module.exports = generateHTML;
