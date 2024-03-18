//CUSTOMER\\
class Customer {
    name = "";
    address = "";
    phone = "";
    email = "";
    accountx = [];
    constructor(name, address, phone, email) {
        this.name = name;
        this.address = address;
        this.phone = phone;
        this.email = email;
    }
    //อันนี้มาจาก class diagram
    verify(name, address, phone, email) {
        if (this.name === name || this.address == address || this.phone == phone || this.email == email) {
            return true;
        }
        else {
            return false;
        }

    }
    getAccount() {
        return this.accountx;
    }
    createAccount(bank, accountType) {
        return bank.createAccount(accountType)
    }


    //อันนี้กูทำเองนะ
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
    getPhone() {
        return this.phone;
    }
    getEmail() {
        return this.email;
    }
}

class Account {
    accountNumber = "";
    balance = 0.0;
    constructor(accountNumber, balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    getAccountNumber() {
        return this.accountNumber;
    }
    getBalance() {
        return this.balance;
    }
}

//BANK\\
class Bank {
    name = "";
    address = "";
    code = "";
    constructor(name, address, code) {
        this.name = name;
        this.address = address;
        this.code = code;
    }
    createAccount(accountType) {
        var account;
        if (accountType === "current") {
            const account = new CurrentAccount("154-69-8756-2", 10.00, 500000, 0.3)
            return account;
        }
        else {
            account = new SavingAccount("569-78-3267-9", 200.00, 500000, 0.5)
            return account;
        }
    }
    createCustomer(name, address, phone, email) {
        const customer = new Customer("Vick", "NPRU", "0922932011", "vc123@gmail.com");
return customer;
    }
    createATM(){
        const atm = new ATM("Bangkok", "Punsan") 
        return atm;
    }






    //อันนี้กูก็ทำเองนะ
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getAddress() {
        return this.address;
    }
    setAddress(address) {
        this.address = address;
    }
}

class CurrentAccount {
    overdraftLimit = 0.0;
    overdraftInterest = 0.0;
    constructor(overdraftLimit, overdraftInterest) {
        this.overdraftLimit = overdraftLimit;
        this.overdraftInterest = overdraftInterest;
    }
    getOverdraftLimit() {
        return this.overdraftLimit;
    }
    getOverdraftInterest() {
        return this.overdraftInterest;
    }
}

class SavingAccount {
    interestRate = 0.0;

}

class Transaction {
    transactionID = "";
    transactionType = "";
    amount = "";
    transactionDate = "";
    status = "";
    constructor(transactionID, transactionType, amount, transactionDate, status) {
        this.transactionID = transactionID;
        this.transactionType = transactionType;
        this.amount = amount;
        this.transactionDate = transactionDate;
        this.status = status;
    }
    gettransactionID() {
        return this.transactionID;
    }
    gettransactionType() {
        return this.transactionType;
    }
    setAmount(amount) {
        this.amount = amount;
    }
    gettransactionDate() {
        return this.transactionDate;
    }
}

class ATM {
    location = "";
    mangedBy = "";
    constructor(location, mangedBy) {
        this.location = location;
        this.mangedBy = mangedBy;
    }
}
const main = () => {

}
main();