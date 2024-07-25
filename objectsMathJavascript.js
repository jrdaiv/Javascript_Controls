/*  Task 1 */

function Account(accountNumber, balance, owner){
    this.accountNumber = accountNumber;
    this.balance = balance;
    this.owner = owner
}


/* Task 2 */

Account.prototype.deposit = function(amount){
    if (amount > 0) {
        this.balance += amount;
        console.log(`Desposited $${amount}, Balance: $${this.balance}`)
    }else{
        console.log(`Oops error`)
    }
}

Account.prototype.withdraw = function(amount){
    if (amount > 0 & amount <= this.balance){
        this.balance -= amount;
        console.log(`Withdrawn $${amount}, Balance $${this.balance}`);
    }else{
        console.log("Oops error")
    }
}

/* Task 3 */

Account.prototype.Interest = function(years, interestRate) {
    const Interest = this.balance * Math.pow((1 + interestRate / 100), years);
    return Math.ceil(Interest);
};




const account = new Account(1001, 500, "Ava Mae")





account.deposit(100);
account.withdraw(200);







