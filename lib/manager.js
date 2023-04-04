const Employee = require('./employee');

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        
        if (typeof officeNumber === 'number' && !Number.isNaN(officeNumber) && officeNumber >= 0) {
            this.officeNumber = officeNumber;
        } else {
            throw new Error("Expected parameter 'officeNumber' to be a positive number");
        }

        this.role = "Manager"
    }
}

module.exports = Manager;