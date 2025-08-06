// | Modifier    | Where Accessible From           |
// | ----------- | ------------------------------- |
// | `public`    | Anywhere (default modifier)     |
// | `private`   | Only inside the same class      |
// | `protected` | Inside the class AND subclasses |
class Account {
  public name: string;
  private balance: number;
  protected accountType: string;

  constructor(name: string, balance: number, accountType: string) {
    this.name = name;
    this.balance = balance;
    this.accountType = accountType;
  }

  showDetails() {
    console.log(`Name: ${this.name}`);
    console.log(`Balance: ${this.balance}`);
    console.log(`Type: ${this.accountType}`);
  }
}

class SavingsAccount extends Account {
  showType() {
    console.log(`Account Type: ${this.accountType}`); // ✅ accessible (protected)
    // console.log(`Balance: ${this.balance}`); // ❌ Error: balance is private
  }
}

let acc = new SavingsAccount("Deepesh", 10000, "Savings");
acc.showDetails();
acc.showType();

// console.log(acc.balance); ❌ Error: Private
// console.log(acc.accountType); ❌ Error: Protected
console.log(acc.name); // ✅ Public