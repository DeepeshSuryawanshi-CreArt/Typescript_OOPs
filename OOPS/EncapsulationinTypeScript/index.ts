class BankAccount {
  private balance: number;

  constructor(initialBalance: number) {
    this.balance = initialBalance;
  }

  // Getter (read-only access)
  getBalance(): number {
    return this.balance;
  }

  // Setter (write/update access)
  deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited: ${amount}`);
    }
  }

  withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn: ${amount}`);
    } else {
      console.log('Insufficient funds or invalid amount.');
    }
  }
}

const myAccount = new BankAccount(1000);

myAccount.deposit(500);      // Deposited: 500
myAccount.withdraw(200);     // Withdrawn: 200
console.log(myAccount.getBalance());  // 1300
