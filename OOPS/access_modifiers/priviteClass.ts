class BankAccount {
  acno: number;
  private balance: number;
  name: string;

  constructor(name: string, acno: number, balance: number) {
    this.name = name;
    this.acno = acno;
    this.balance = balance;
  }
  getBalance() {
    return this.balance;
  }
  getDetails() {
    return { name: this.name, accountNo: this.acno, balance: this.balance };
  }
}

let account1 = new BankAccount("Punjab National Bank",21520320025645,12150)
let result = account1.getBalance()
console.log(result)