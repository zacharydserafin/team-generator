const Employee = require("./employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);
        
        if (typeof github === 'string') {
            this.github = github;
        } else {
            throw new Error("Expected parameter 'github' to be a string");
        }

        this.role = "Engineer"
    }

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;