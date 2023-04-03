const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should inherit values and methods from the parent class 'Employee'", () => {
            const engineer = new Engineer("Randy", 6, "randy@gmail.com", "randyblankets");

            expect(engineer.getName()).toEqual("Randy");
            expect(engineer.getId()).toEqual(6);
            expect(engineer.getEmail()).toEqual("randy@gmail.com");
        });
        it("should add the additional property 'github' to the given object", () => {
            const engineer = new Engineer("Randy", 6, "randy@gmail.com", "randyblankets");

            expect(engineer.github).toEqual("randyblankets");
        });
        it("should throw an error if 'github' is not a string", () => {
            const cb = new Engineer("Randy", 6, "randy@gmail.com", 85);
            const err = new Error("Expected parameter 'github' to be a string");
      
            expect(cb).toThrowError(err);
        });
        it("should override 'role' to have the value 'Engineer'", () => {
            const engineer = new Engineer("Randy", 6, "randy@gmail.com", "randyblankets");

            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
    describe("getGithub", () => {
        it("should return the 'github' value of a given object", () => {
            const engineer = new Engineer("Randy", 6, "randy@gmail.com", "randyblankets");

            expect(engineer.getGithub()).toEqual("randyblankets");
        });
    });
});