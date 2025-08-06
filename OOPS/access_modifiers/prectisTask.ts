// 🏗️ Your Practice Task
// Create a class User with:
// username (public)
// password (private)
// a method login() that logs: Logging in ${username}...
// a method showPassword() that logs the password (only from inside class)
// Create a user and call both methods. Try accessing password directly (should give error).

class User{
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

class superUser extends User{
    isAdmin:boolean
    constructor(isAdmin:boolean,username:string,password:string){
        super(username,password)
        this.isAdmin = isAdmin
    }
    getDetails(){
        console.log(`User:${this.username}, password:${this.sharePassword()},isAdmin:${this.isAdmin}`)
    }    
}

let userOne = new User("Deepesh.ai","Dev@ai#0409#")
// userOne.ShowPassword()

let userTwo = new superUser(true,"Deepesh.ai.admin","Dev@ai@admin#0409")
userTwo.getDetails()
userTwo.ShowPassword()