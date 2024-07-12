var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BankAccount = /** @class */ (function () {
    function BankAccount(initialBalance, accountNumber) {
        this.balance = initialBalance;
        this.accountNumber = accountNumber;
    }
    BankAccount.prototype.deposit = function (amount) {
        this.balance += amount;
    };
    BankAccount.prototype.withdraw = function (amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        }
        else {
            console.log("Insufficient funds");
        }
    };
    BankAccount.prototype.getBalance = function () {
        return this.balance;
    };
    return BankAccount;
}());
var account = new BankAccount(1000, "ACC04");
account.deposit(600);
console.log(account.getBalance()); // Output: 1600
account.withdraw(100);
console.log(account.getBalance()); // Output: 1500
var SavingAccount = /** @class */ (function (_super) {
    __extends(SavingAccount, _super);
    function SavingAccount(initialBalance, accountNumber, interestRate) {
        var _this = _super.call(this, initialBalance, accountNumber) || this;
        _this.interestRate = interestRate;
        return _this;
    }
    SavingAccount.prototype.applyinterestRate = function () {
        var interestAmount = this.balance * (this.interestRate / 100); // 2000 * (5/100) = 100
        this.deposit(interestAmount); //2000+100 = 2100
    };
    return SavingAccount;
}(BankAccount));
var savingAccount = new SavingAccount(2000, "SAV001", 5);
savingAccount.applyinterestRate();
console.log(savingAccount.getBalance());
