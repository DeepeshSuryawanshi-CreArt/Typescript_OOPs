// ✅ Task for You:
// Make a Person class with name, and a method sayHello().
// Then create a Teacher class that inherits Person and adds subject + a method teach().

class Person{
    name:string
    constructor(name:string){
        this.name = name
    }
    sayhello(){
        console.log(`Hello ${this.name}`)
    }
}


class Teacher extends Person{
    subject:string;
    constructor(name:string,subject:string){
        super(name)
        this.subject = subject
    }
    teach(){
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}

let manish = new Teacher("Manish","Hindi")
manish.sayhello()
manish.teach()