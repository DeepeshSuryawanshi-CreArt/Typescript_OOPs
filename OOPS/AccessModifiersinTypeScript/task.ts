/*✅ Challenge:
Can you write a class called BankAccount with:
public property: accountHolder
private property: balance
protected property: accountNumber
A method deposit(amount) that increases the balance
A method getBalance() that shows the balance
*/
class BankAccount{
    public  accountHolder: string
    private balance: number
    protected accountNumber: number

    constructor(name:string,deposit:number,accountNo:number){
        this.accountHolder = name
        this.balance = deposit
        this.accountNumber = accountNo
    }
    deposit(amount:number){
        this.balance += amount;
    }
    withdrawl(amount:number){
        this.balance -= amount;
    }
    getBalance(){
        console.log(`Current Balance: ${this.balance}`)
    }
}

let acc1 = new BankAccount("Deepesh",1000,1563254487542135)
acc1.deposit(1000)
acc1.getBalance()
acc1.withdrawl(200)
acc1.getBalance()