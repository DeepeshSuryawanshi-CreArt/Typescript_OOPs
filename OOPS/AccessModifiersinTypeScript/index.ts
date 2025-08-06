class Employee {
  public name: string;
  private salary: number;
  protected department: string;

  constructor(name: string, salary: number, department: string) {
    this.name = name;
    this.salary = salary;
    this.department = department;
  }

  public showInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Department: ${this.department}`);
    console.log(`Salary: ${this.salary}`);
  }

  private getSalary() {
    return this.salary;
  }
}

class Manager extends Employee {
  public getDepartment() {
    // ✅ Can access protected inside subclass
    return this.department;
  }

  public tryAccessSalary() {
    // ❌ Cannot access private property
    // return this.salary;
  }
}

const emp = new Employee("Alice", 70000, "Engineering");
emp.showInfo();

console.log(emp.name);         // ✅ public - allowed
// console.log(emp.salary);    // ❌ private - Error
// console.log(emp.department); // ❌ protected - Error

const manager = new Manager("Bob", 90000, "Sales");
console.log(manager.getDepartment()); // ✅

// 🧠 In Simple Words:
// Use public for everything you're okay with exposing to the world.
// Use private for secrets (like passwords, salary).
// Use protected when you want child classes to access it, but not outside users.