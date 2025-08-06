/*🧠 Real-Life Analogy:
Vehicle → Base class
Car, Bike, Bus → Derived classes that inherit common things (like speed, fuel, drive()) */

// Basic Inheritance
class Vehicle {
    startEngine() {
        console.log("Engine started 🚗");
    }
}

class Car extends Vehicle {
    drive() {
        console.log("Driving the car...");
    }
}

const myCar = new Car();
myCar.startEngine();  // from parent
myCar.drive();        // from child

// Constructor Inheritance with super()
class Animal {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    breed: string;

    constructor(name: string, breed: string) {
        super(name); // call parent constructor
        this.breed = breed;
    }

    bark() {
        console.log(`${this.name} the ${this.breed} barks 🐶`);
    }
}

const dog1 = new Dog("Rocky", "Labrador");
dog1.makeSound(); // Inherited
dog1.bark();      // Own method