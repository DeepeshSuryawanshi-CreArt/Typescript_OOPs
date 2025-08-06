interface Person {
    name:string
    age:number
    greeting:()=>void
    detail():void
}

const user:Person = {
    name:"Deepesh",
    age:22,
    detail(){console.log(`Name: ${this.name}, age: ${this.age}`)},
    greeting() {
        console.log(`Hello ${this.name}`)
    },
}