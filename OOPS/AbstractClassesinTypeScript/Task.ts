// 1. Create an abstract class UserBase:
// property: username: string
// constructor to set username
// abstract method: login(): void
// normal method: greet() → logs Hello, I am ${this.username}
// 2. Create a class AdminUser that:
// extends UserBase
// implements login() to log: Admin ${username} logged in.
// 3. Create an object of AdminUser and call greet() and login()
abstract class Admin{
    username:string
    constructor(username:string){
        this.username = username
    }
    abstract Login():void
    greet():void{
        console.log(`Logs Admin ${this.username} Logged in.`)
    }
}

class User extends Admin{
    Login(): void {
        console.log(`Admin ${this.username} Logged In.`)
    }
}
let adminUser = new User("Deepesh.ai")
adminUser.Login()
adminUser.greet()