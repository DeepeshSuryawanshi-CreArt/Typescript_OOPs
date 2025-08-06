// 🏗️ Your Practice Task:
// Create a parent class User with:
// username: string
// login() method
// Create a child class AdminUser that:
// extends User
// has a method deleteUser() that logs: ${this.username} deleted a user.
// Create an object from AdminUser and call both login() and deleteUser().

class user{
    username:string
    private password:string
    constructor(username:string,password:string){
        this.username = username;
        this.password = password;
    }
    Login():void{
        console.log(`Logging in ${this.username}`)
    }
    ShowPassword():void{
        console.log(`The Password: ${this.password}`)
    }
    sharePassword():string{
        return this.password
    }
}

class Admin extends user{
    delete():void{
        console.log(`${this.username} deleted a User`)
    }
}

let AdminUser = new Admin("Deepesh","Password")
AdminUser.Login()
AdminUser.delete()