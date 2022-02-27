class BankAccount {
  #amount = 0;

  constructor(initialAmount) {
    this.#amount = initialAmount;
  }

  deposit(amount) {
    this.#amount += amount;
  }

  withdraw(amount) {
    this.#amount -= amount;
  }

  view() {
    console.log(this.#amount);
  }

  get amount() {
    return this.#amount;
  }

  set amount(value) {
    this.#amount += value;
  }
}

class BankAccountVip extends BankAccount {
  constructor(initialAmount) {
    super(initialAmount)
  }

  deposit(amount) {
    if(this.amount >= 1000) {
      this.amount = amount + (amount * 0.03)
    } else {
      this.amount = amount
    }
  }
}


const bankAccountVip = new BankAccountVip(1000);
bankAccountVip.deposit(500);
bankAccountVip.deposit(1200);
bankAccountVip.withdraw(800);
bankAccountVip.deposit(3500);
bankAccountVip.view();