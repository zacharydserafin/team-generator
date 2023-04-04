const team = require('../index');
const fs = require('fs');

function createCards(team) {
    var cards = [];
    for (const member of team) {
        if (member.role === "Manager") {
            const managerHTML = 
            `\t\t\t<div>
                <div>
                    <h3>${member.name}</h3>
                    <h4>${member.role}</h4>
                </div>
                <div>
                    <p>ID: ${member.id}</p>
                    <p>Email: ${member.email}</p>
                    <p>Office Number: ${member.officeNumber}</p>
                </div>
            </div>`;
            cards.push(managerHTML);
        }
        if (member.role === "Engineer") {
            const engineerHTML = 
            `\t\t\t<div>
                <div>
                    <h3>${member.name}</h3>
                    <h4>${member.role}</h4>
                </div>
                <div>
                    <p>ID: ${member.id}</p>
                    <p>Email: ${member.email}</p>
                    <p>GitHub: ${member.github}</p>
                </div>
            </div>`;
            cards.push(engineerHTML);
        }
        if (member.role === "Intern") {
            const internHTML = 
            `\t\t\t<div>
                <div>
                    <h3>${member.name}</h3>
                    <h4>${member.role}</h4>
                </div>
                <div>
                    <p>ID: ${member.id}</p>
                    <p>Email: ${member.email}</p>
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
        <title>My Team Profile</title>
    </head>
    <body>
        <header>My Team</header>
        <div>
${cards}
        </div>
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
