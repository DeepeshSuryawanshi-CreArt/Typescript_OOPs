// 🎯 Your Turn: Try Writing Your Own Version
// Task: Create a parent class called Vehicle, and two child classes Car and Bike. 
// Each should have a method move() that logs a different message.
// Then make an array of Vehicle[] with both car and bike, and call move() on each one.

// Your code here:
abstract class Vehicle {
    abstract move():void
    EngineStart():void{
        console.log("Engine Start")
    }
}

class Car extends Vehicle {
    move(): void {
        console.log("Car is Moving")
    }
}

class Bike extends Vehicle {
    move(): void {
        console.log("Bike is Moving")
    }
}

const vehicles: Vehicle[] = [
    new Car(), new Bike()
];

vehicles.forEach((v) => {v.EngineStart();v.move()});