const Manager = require("../lib/manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should inherit values and methods from the parent class 'Employee'", () => {
            const manager = new Manager("John", 5, "john@gmail.com", 55);

            expect(manager.getName()).toEqual("John");
            expect(manager.getId()).toEqual(5);
            expect(manager.getEmail()).toEqual("john@gmail.com");
        });
        it("should add the additional property 'officeNumber' to the given object", () => {
            const manager = new Manager("John", 5, "john@gmail.com", 55);

            expect(manager.officeNumber).toEqual(55);
        });
        it("should override 'role' to have the value 'Manager'", () => {
            const manager = new Manager("John", 5, "john@gmail.com", 55);

            expect(manager.getRole()).toEqual("Manager");
        });
    });
});