const Employee = require("../lib/employee.js");

describe("Employee", () => {
  describe("Initialization", () => {
    it("Should return an object with class of 'employee' that extends 'employee'", () => {
      const obj = new Employee(name="name", id=1, email="hello@email.com");

      expect(typeof obj === 'object' && obj !== null).toEqual(true);
    });

    it("should have a 'name' element", () => {
      const obj = new Employee(name="name", id=1, email="hello@email.com");
      
      expect(obj.name).toEqual('name');
    });
  })

  describe("Methods", () => {

    it("should have a 'getId' method that returns the role of that employee", () => {
      const obj = new Employee(name="name", id=1, email="hello@email.com");
      
      expect(obj.getId()).toEqual(1);
    });

    it("should have a 'getName' method that returns the role of that employee", () => {
      const obj = new Employee(name="name", id=1, email="hello@email.com");
      
      expect(obj.getName()).toEqual('name');
    });

    it("should have a 'getEmail' method that returns the role of that employee", () => {
      const obj = new Employee(name="name", id=1, email="hello@email.com");
      
      expect(obj.getEmail()).toEqual('hello@email.com');
    });

    it("should have a 'getRole' method that returns the role of that employee", () => {
      const obj = new Employee(name="name", id=1, email="hello@email.com");
      
      expect(obj.getRole()).toEqual("Employee");
    });
  });
})
