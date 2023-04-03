const Employee = require("../lib/employee");

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object with the name, id, and email properties if provided valid arguments", () => {
            const employee = new Employee("John", 5, "john@gmail.com");

            expect(employee.name).toEqual("John");
            expect(employee.id).toEqual(5);
            expect(employee.email).toEqual("john@gmail.com");
        });

        it("should throw an error if provided no arguments", () => {
            const cb = () => new Employee();
            
            expect(cb).toThrow();
        });

        it("should throw an error if 'name' is not a string", () => {
            const cb = () => new Employee(3, 5, "john@gmail.com");
            const err = new Error("Expected parameter 'name' to be a string");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is not a number", () => {
            const cb = () => new Employee("John", "5", "john@gmail.com");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'id' is less than 0", () => {
            const cb = () => new Employee("John", -5, "john@gmail.com");
            const err = new Error("Expected parameter 'id' to be a positive number");
      
            expect(cb).toThrowError(err);
        });

        it("should throw an error if 'email' is invalid", () => {
            const cb = () => new Employee("John", 5, "john.gmail");
            const err = new Error("Expected parameter 'email' to be a valid email address");
      
            expect(cb).toThrowError(err);
        });
    });
    describe("getName()", () => {
        it("should return the 'name' value of a given object", () => {
            const employee = new Employee("John", 5, "john@gmail.com");

            expect(employee.getName()).toEqual("John");
        });
    });
    describe("getId()", () => {
        it("should return the 'id' value of a given object", () => {
            const employee = new Employee("John", 5, "john@gmail.com");

            expect(employee.getId()).toEqual(5);
        });
    });
    describe("getEmail()", () => {
        it("should return the 'email' value of a given object", () => {
            const employee = new Employee("John", 5, "john@gmail.com");

            expect(employee.getEmail()).toEqual("john@gmail.com");
        });
    });
    describe("getRole()", () => {
        it("should return the value 'Employee' from the key 'role' of a given object", () => {
            const employee = new Employee("John", 5, "john@gmail.com");

            expect(employee.getRole()).toEqual("Employee");
        });
    });   
});