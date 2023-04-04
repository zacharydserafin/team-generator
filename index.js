const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const generateHTML = require("./src/template");

var team = [];
var engineers = [];
var interns = [];

function getManager() {
    var questions = [
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?",
        },
        {
            type: 'input',
            name: 'id',
            message: "What is your team manager's id number?",
        },
        {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email?",
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "What is your team manager's office number?",
        },
    ]
    return inquirer.prompt(questions);
}

function selectNextAction() {
    inquirer
        .prompt([
        {
            name: 'choice',
            type: 'list',
            message: "What would you like to do next?",
            choices: ['Add Engineer', 'Add Intern', 'Finish Building Team']
        }
        ])
        .then((choice) => {
            switch (choice.choice) {
                case 'Add Engineer':
                    getEngineer();
                    break;
                case 'Add Intern':
                    getIntern();
                    break;
                case 'Finish Building Team':
                    dataCompile();
                    break;
            }
        });
}

function getEngineer() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your engineer's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your engineer's id number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your engineer's email?",
            },
            {
                type: 'input',
                name: 'github',
                message: "What is your engineer's GitHub username?",
            },
        ])
        .then((answers) => {
            const engineer = new Engineer(answers.name, parseInt(answers.id), answers.email, answers.github);
            engineers.push(engineer);
            selectNextAction();
        });   
}

function getIntern() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: "What is your intern's name?",
            },
            {
                type: 'input',
                name: 'id',
                message: "What is your intern's id number?",
            },
            {
                type: 'input',
                name: 'email',
                message: "What is your intern's email?",
            },
            {
                type: 'input',
                name: 'school',
                message: "What school is your intern from?",
            },
        ])
        .then((answers) => {
            const intern = new Intern(answers.name, parseInt(answers.id), answers.email, answers.school);
            interns.push(intern);
            selectNextAction();
        });   
}

function dataCompile() {
    if (engineers !== []) {
    team.push(...engineers);
    }
    if (interns !== []) {
    team.push(...interns);
    }
    generateHTML(team);
}

function init() {
    getManager().then((data) => {
        const manager = new Manager(data.name, parseInt(data.id), data.email, parseInt(data.officeNumber));
        team.push(manager);
        selectNextAction();
    });
}

init();

module.exports = team;