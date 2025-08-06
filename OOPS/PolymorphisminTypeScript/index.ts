class Animal {
    speak() {
        console.log("The animal makes a sound");
    }
}

class Dog extends Animal {
    speak() {
        console.log("The dog barks");
    }
}

class Cat extends Animal {
    speak() {
        console.log("The cat meows");
    }
}

// Polymorphic behavior
const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => {
    animal.speak();  // Will call Dog or Cat's version, not Animal's
});