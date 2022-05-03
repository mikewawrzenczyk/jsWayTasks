class bankAccount {
  constructor(name, balance) {
    this.name = name;
    this.balance = balance;
  }

  credit(credit){
    this.balance = this.balance + credit
  }
  describe(){
    return `${this.name}'s account balance is ${this.balance}`
  }
}

// const sean = new bankAccount('Sean', 0)
// const Brad = new bankAccount('Brad', 0)
// const Georges = new bankAccount('Georges', 0)

let accounts = [new bankAccount('Sean', 0), new bankAccount('Brad', 0), new bankAccount('Georges', 0)]

// accounts.forEach(element => console.log(element))
accounts.forEach(element => element.credit(1000))
accounts.forEach(element => console.log(element.describe()))