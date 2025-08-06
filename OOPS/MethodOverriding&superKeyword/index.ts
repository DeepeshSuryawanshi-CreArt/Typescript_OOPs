class UserModel{
    username:string
    private password:string
    constructor(username:string,password:string){
        this.username = username
        this.password = password
    }
    login():void{
        console.log(`${this.username} is logging in....`)
    }
    greet():void{
        console.log(`Hello, I am user ${this.username}`)
    }
}

class Admin extends UserModel{
    login(): void {
        super.login()
        console.log(`[Admin Login] welcome, ${this.username}`)
    }
    greet(): void {
        super.greet()
        console.log(`Hello, I'm admin ${this.username}`)
    }
}
let admin = new Admin("Deepesh", "admin#deepesh")
admin.login()

// Update your User class to have a method greet() that says:
// Hello, I am user ${username}
// In your Admin class:
// Override greet() to say:
// Hello, I am admin ${username}
// Call super.greet() first inside it.
admin.greet()