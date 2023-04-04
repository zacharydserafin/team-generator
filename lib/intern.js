const Employee = require("./employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email);
        
        if (typeof school === 'string') {
            this.school = school;
        } else {
            throw new Error("Expected parameter 'school' to be a string");
        }

        this.role = "Intern"
    }

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;