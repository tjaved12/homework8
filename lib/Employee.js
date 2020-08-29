// TODO: Write code to define and export the Employee class

// const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./intern");



// const employee = new Employee("Mike Will","Manager");
// employee.printInfo();  // result: Mike Will is Manager!

class Employee  {
    constructor(name, id, email) {
        this.name=name
        this.id=id  
        this.email=email 
    }
    getName() {
     
       
        return this.name
      }
      getId() {
     
        return this.id
      }
      getEmail() {
     
        return this.email
      }
      getRole() {
     return "Employee"
        
      }
    }
    module.exports = Employee;