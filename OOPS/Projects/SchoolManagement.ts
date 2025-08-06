// 🏗️ Project Structure:
// 1. Person (Base class)
// name: string
// age: number
// email: string
// showDetails(): void
// 2. Student (Inherits from Person)
// rollNumber: string
// grade: string
// courses: string[]
// enrollCourse(courseName: string): void
// Override showDetails() to include rollNumber and grade
// 3. Teacher (Inherits from Person)
// employeeId: string
// subject: string
// assignmentsGiven: string[]
// giveAssignment(assignment: string): void
// Override showDetails() to include employeeId and subject
// 4. Course
// courseName: string
// students: Student[]
// teacher: Teacher | null
// addStudent(student: Student): void
// assignTeacher(teacher: Teacher): void
// listStudents(): void

class Person {
  name: string;
  age: number;
  email: string;
  constructor(name: string, age: number, email: string) {
    this.email = email;
    this.name = name;
    this.age = age;
  }
  showDetails(): void {
    console.log(`Name:${this.name} Age:${this.age} Email:${this.email}`);
  }
}

class Student extends Person {
  rollNo: number;
  grade: number;
  course: string[];

  constructor(
    name: string,
    email: string,
    age: number,
    rollno: number,
    grade: number,
    course: [string]
  ) {
    super(name, age, email);
    this.rollNo = rollno;
    this.grade = grade;
    this.course = course;
  }
  enrollCourses(courserName: string): void {
    this.course.push(courserName);
  }
  showDetails(): void {
    console.log(
      `Student Roll No:${this.rollNo}  grade:${this.grade} courses:${this.course}`
    );
  }
}

class Teacher extends Person {
  employeeId: number;
  subject: string;
  assignmentGiven: string[];
  constructor(
    name: string,
    email: string,
    age: number,
    employeeid: number,
    subject: string,
    assignment: [string]
  ) {
    super(name, age, email);
    this.employeeId = employeeid;
    this.subject = subject;
    this.assignmentGiven = assignment;
  }
  GiveAssignment(assignment: string): void {
    this.assignmentGiven.push(assignment);
  }
  showDetails(): void {}
}

class Course{
    courseName:string
    students:[Student]
    teacher:Teacher
    constructor(coursername:string,student:[Student],teacher:Teacher){
        this.courseName = coursername
        this.students = student
        this.teacher = teacher
    }
    addStudent(student: Student): void{
        this.students.push(student)
    }
    assignTeacher(teacher: Teacher): void{
        this.teacher = teacher
    }
    listStudents(): void{
        console.log("Student in Courser:",this.courseName)
        this.students.forEach((student)=>console.log(`${student.showDetails()}`))
    }
}
// teachers
let Hitesh_choudhary = new Teacher("Hitesh Cgoudhary","Hitesh.ai@hc.com",35,1101,"Web Development Javascript / Typescript",["Web Development"])
let Strive = new Teacher("Strive","strive@gmail.com",28,1102,"Data Stracture and Algorithem",["DSA"])
Hitesh_choudhary.GiveAssignment("Web Dev Cohot")
Strive.GiveAssignment("DSA Sheet")
// student
let Dhammu = new Student("Dharmandre yadav","DhammuYadavji@youpmail.com",35,1234,60,["Data Science"])
let Deepesh = new Student("Deepesh Suryawanshi","Deepesh.ai@Hc.com",22,1784,80,["Web Development"])
Dhammu.enrollCourses("DSA")
Deepesh.enrollCourses("Web Development")

// coursers
let DSA = new Course("Data Stracture and Algorithem",[Dhammu],Strive)
let Web_dev = new Course("Web Development",[Deepesh],Strive)
DSA.addStudent(Deepesh)

Deepesh.showDetails()