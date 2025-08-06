// An interface defines the structure or contract that a class should follow.
// Think of it like a blueprint — it doesn’t implement anything but defines what should be implemented.
interface Animal {
  name: string;
  speak(): void;
}

class Dog implements Animal{
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak(): void {
    console.log(`${this.name} says Woof!`);
  }
}

const dog = new Dog("Tommy");
dog.speak(); // Output: Tommy says Woof!

/*
| Feature                | Interface                   | Class                            |
| ---------------------- | --------------------------- | -------------------------------- |
| Structure or Behavior? | Only structure (no logic)   | Both structure and logic         |
| Methods                | Method signatures only      | Methods with full implementation |
| Inheritance            | Can extend other interfaces | Can extend other classes         |
| Object Creation        | Cannot create object        | Can create object                |
*/