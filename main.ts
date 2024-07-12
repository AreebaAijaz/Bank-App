
class BankAccount {
    protected balance: number;
    private accountNumber: string;

    constructor(initialBalance: number, accountNumber: string) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
    }

    deposit(amount: number) {
        this.balance += amount;
    }

    withdraw(amount: number): void { 
         if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance(): number {
        return this.balance;
    }
}

const account = new BankAccount(1000, "ACC04");
account.deposit(600);
console.log(account.getBalance()); // Output: 1600
account.withdraw(100);
console.log(account.getBalance()); // Output: 1500

class SavingAccount extends BankAccount{
    interestRate:number
    constructor(initialBalance:number , accountNumber:string , interestRate:number){
        super(initialBalance , accountNumber)
        this.interestRate = interestRate
    }
    applyinterestRate(){
        const interestAmount = this.balance *(this.interestRate / 100)  // 2000 * (5/100) = 100
        this.deposit(interestAmount)     //2000+100 = 2100
    }
}
const savingAccount = new SavingAccount(2000 , "SAV001" , 5)
savingAccount.applyinterestRate()
console.log(savingAccount.getBalance())








