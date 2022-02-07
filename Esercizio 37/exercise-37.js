class BankAccount {
    constructor(initialBalance) {
      this.balance = initialBalance;
    }
  
    deposit(amount) {
      this.balance += amount;
    }
  
    withdraw(amount) {
      this.balance -= amount;
    }
  
    view() {
      console.log(this.balance);
    }
}

const bankAccount = new BankAccount(1000);
bankAccount.deposit(500);
bankAccount.deposit(200);
bankAccount.withdraw(800);
bankAccount.view();