// 🏗️ Project Structure:

class Person {
  name: string;
  private age: number;
  private email: string;
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
    super.showDetails();
    console.log(
      `Student Roll No:${this.rollNo}  grade:${this.grade} courses:${this.course}\n`
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
  showDetails(): void {
    super.showDetails();
    console.log(
      `Employe_Id:${this.employeeId}  Subject:${this.subject} Assignment:${this.assignmentGiven}\n`
    );
  }
}

class Course {
  courseName: string;
  students: [Student];
  teacher: Teacher;
  constructor(coursername: string, student: [Student], teacher: Teacher) {
    this.courseName = coursername;
    this.students = student;
    this.teacher = teacher;
  }
  addStudent(student: Student): void {
    this.students.push(student);
  }
  assignTeacher(teacher: Teacher): void {
    this.teacher = teacher;
  }
  listStudents(): void {
    console.log("Student in Courser:", this.courseName, "\n");
    console.log("Courses Details show run", this.students);
    this.students.forEach((student) => {
      console.log(`${student.showDetails()}`);
    });
  }
}

const Students: Student[] = [];
const Teachers: Teacher[] = [];
const Courses: Course[] = [];

while (true) {
  const options = [
    "Add Student",
    "Add Teacher",
    "Create Course",
    "Enroll Student in Course",
    "Assigne Teacher to Course",
    "List All Course with Details",
    "Exit-- Shut Down",
  ];
  console.log("Welcome to School Management System\n");
  options.forEach((opt, index) => {
    console.log(index + 1, `. ${opt}`);
  });
  let value = Number(prompt("Enter you Option:"));
  switch (value) {
    case 1:
      console.log("\nAdd student");
      let name = String(prompt("Enter the Name"));
      let age = Number(prompt("Enter the Age"));
      let email = String(prompt("Enter the Email"));
      let rollNo = Number(prompt("Enter the Roll No"));
      let grade = Number(prompt("Enter the Grad"));
      let courseName = String(prompt("Enter the Course"));
      const student = new Student(name, email, age, rollNo, grade, [courseName]);
      Students.push(student);
      console.log("\nStudent Add Successfully\n");
      break;
    case 2:
      console.log("\nAdd teacher");
      let tname = String(prompt("Enter the Name"));
      let tage = Number(prompt("Enter the Age"));
      let temail = String(prompt("Enter the Email"));
      let empid = Number(prompt("Enter the Employee Id"));
      let subject = String(prompt("Enter the Subject"));
      let assignment = String(prompt("Enter the Course"));
      const teacher = new Teacher(tname, temail, tage, empid, subject, [
        assignment,
      ]);
      Teachers.push(teacher);
      console.log("\nTeacher Add Successfully\n");
      break;
    case 3:
      console.log("\nCreate Course");
      let cname = String(prompt("Enter the Course Name:"));
      Students.forEach((student, index) => {console.log(index); student.showDetails()});
      let selectedStudent = Number(prompt("Enter the student Number"));
      Teachers.forEach((teacher, index) => {console.log(index); teacher.showDetails()});
      let selectedTeacher = Number(prompt("Enter the Teacher Number"));
      // Validate student selection
      let cstuident = Students[selectedStudent];
      if (!cstuident) {
        console.log("Invalid student selection!");
        break;
      }
      // Validate teacher selection
      let cteacher = Teachers[selectedTeacher];
      if (!cteacher) {
        console.log("Invalid teacher selection!");
        break;
      }
      const course = new Course(cname, [cstuident], cteacher);
      Courses.push(course);
      console.log("\nCourse created successfully!\n");
      break;
    case 4:
      console.log("\nEnroll student in Course");
      break;
    case 5:
      console.log("\nAssigne Teacher to course");
      break;
    case 6:
      console.log("\nList All Course with Details");
      if (Courses.length === 0) {
        console.log("No courses available.");
      } else {
        Courses.forEach((course, index) => {
          console.log(`Course ${index + 1}:`);
          course.listStudents();
        });
      }
      break;
    case 7:
      console.log("Shut Down -- Exit");
      break;
  }
  if (value === 7) break;
}
