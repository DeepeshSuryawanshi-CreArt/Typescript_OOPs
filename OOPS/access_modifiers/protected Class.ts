class AnimalO{
    protected name:string;
    constructor(name:string){
        this.name = name
    }
}

class Cat extends AnimalO{
    meow(){
        console.log(`${this.name} says Meow!`)
    }
}
let kitty = new Cat("Snowbell")
kitty.meow()