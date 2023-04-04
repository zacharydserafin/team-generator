const Intern = require("../lib/intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should inherit values and methods from the parent class 'Employee'", () => {
            const intern = new Intern("Gerald", 7, "gerald@gmail.com", "Yale");

            expect(intern.getName()).toEqual("Gerald");
            expect(intern.getId()).toEqual(7);
            expect(intern.getEmail()).toEqual("gerald@gmail.com");
        });
        it("should add the additional property 'school' to the given object", () => {
            const intern = new Intern("Gerald", 7, "gerald@gmail.com", "Yale");

            expect(intern.school).toEqual("Yale");
        });
        it("should throw an error if 'school' is not a string", () => {
            const err = new Error("Expected parameter 'school' to be a string");
              
            expect(() => new Intern("Gerald", 7, "gerald@gmail.com", 85)).toThrowError(err);
        });
        it("should override 'role' to have the value 'Intern'", () => {
            const intern = new Intern("Gerald", 7, "gerald@gmail.com", "Yale");

            expect(intern.getRole()).toEqual("Intern");
        });
    });
    describe("getSchool", () => {
        it("should return the 'school' value of a given object", () => {
            const intern = new Intern("Gerald", 7, "gerald@gmail.com", "Yale");

            expect(intern.getSchool()).toEqual("Yale");
        });
    });
});