interface UserModelType{
    username:string;
    login():void;
}
class UserModel implements UserModelType{
    username:string
    private password:string
    constructor(username:string,password:string){
        this.username = username
        this.password = password
    }
    login(){
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