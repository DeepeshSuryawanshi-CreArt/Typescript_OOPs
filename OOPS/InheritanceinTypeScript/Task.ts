// ✅ Your Task (Practice):
// Write a class example:
// 1. Employee class:
// properties: name, salary
// method: showDetails()
// 2. Manager class (extends Employee)
// additional property: department
// method: promoteEmployee()
// Then:
// Create an object of Manager
// Call all methods and show it works

class Employee{
    name:string
    private salary:number
    constructor(name:string,salary:number){
        this.name = name
        this.salary = salary
    }
    showDetails(){
        console.log(`Employee Name: ${this.name}, Salary:${this.salary}`)
    }
}

class Manager extends Employee{
    department:string
    constructor(name:string,slaary:number,department:string){
        super(name,slaary)
        this.department = department
    }
    promoteEmployee(){
        console.log(`Department of the Employe: ${this.department}`)
    }
}
let emp = new Manager("Deepesh",120000,"SDE-3")
emp.showDetails()
emp.promoteEmployee()