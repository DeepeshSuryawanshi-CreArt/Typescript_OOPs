// ✅ Your Task
// Make a simple class Student with:
// private field: marks
// A method to update marks
// A method to get marks

class Student{
    name:string
    private marks:number
    constructor(name:string,marks:number){
        this.name = name
        this.marks = marks
    }
    update(marks:number):void{
        this.marks = marks
    }
    getMarks():number{
        return this.marks
    }
}

let student1 = new Student("Deepesh",89)
let student2 = new Student("Harshil",99)
console.log(
    student1.getMarks(),
    student1.update(99),
    student1.getMarks(),
    student2.getMarks()
)