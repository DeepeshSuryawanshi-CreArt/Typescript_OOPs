// Parent class 👨‍👦‍👦
class Animal{
    name:string
    constructor(name:string){
        this.name = name
    }
    makeSound(){
        console.log(`${this.name} Makes Sound!`)
    }
}
// 👶 Child class extends Parent
class Dog extends Animal{
    bark(){
        console.log(`${this.name} says Woof!`)
    }
}

let Dog1 = new Dog("Shero")
Dog1.makeSound()
Dog1.bark()