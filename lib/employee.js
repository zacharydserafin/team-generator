const validator = require('email-validator');

class Employee {
    constructor(name, id, email) {
        if (arguments.length === 0) {
            throw new Error("Expected at least one parameter to be provided");
        }
        
        if (typeof name === "string") {
            this.name = name;
        } else {
            throw new Error("Expected parameter 'name' to be a string");
        }
        
        if (typeof id === 'number' && !Number.isNaN(id) && id >= 0) {
            this.id = id;
        } else {
            throw new Error("Expected parameter 'id' to be a positive number");
        }
        
        if (typeof email === 'string' && validator.validate(email)) {
            this.email = email
        } else {
            throw new Error("Expected parameter 'email' to be a valid email address");
        }

        this.role = "Employee"
    }

    getName() {
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getRole() {
        return this.role;
    }
}

module.exports = Employee;