/*
| Feature           | Description                                               |
| ----------------- | --------------------------------------------------------- |
| `abstract class`  | Cannot be instantiated directly                           |
| `abstract method` | Declared but not defined in base class                    |
| Must Implement    | All abstract methods must be implemented by child classes |
*/

abstract class Animal {
  abstract makeSound(): void; // 👈 abstract method (must be implemented)

  move(): void {
    console.log("Moving...");
  }
}

class Dog extends Animal {
  makeSound(): void {
    console.log("Woof!");
  }
}

const dog = new Dog();
dog.makeSound(); // Woof!
dog.move();      // Moving...
