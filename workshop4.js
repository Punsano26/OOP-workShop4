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
    if (
      this.name === name ||
      this.address == address ||
      this.phone == phone ||
      this.email == email
    ) {
      return true;
    } else {
      return false;
    }
  }
  getAccount() {
    return this.accountx;
  }
  createAccount(bank, accountType) {
    return bank.createAccount(accountType);
  }
  toString() {
    return `Customer [Name :${this.name}, Address :${this.address}, Phone :${this.phone}, Email :${this.email}]`;
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
  customer = null;
  constructor(accountNumber, balance) {
    this.accountNumber = accountNumber;
    this.balance = balance;
  }
  setCustomer() {
    this.customer = this.customer;
  }
  getCustomer() {
    return this.customer;
  }
  getAccountType() {
    return this.accountType;
  }
  //ตรงนี้ยังไม่ได้ใส่เลย ไม่รู้จะใส่อะไรลงไป
  getTransaction() {}
  //Metrod มันยาวจังมาได้ไงวะ
  createTransaction(
    transaction,
    transactionType,
    amount,
    transactionDate,
    status
  ) {
    const transaction1 = new Transaction(
      transaction,
      transactionType,
      amount,
      transactionDate,
      status
    );
    return transaction1;
  }
  withdraw(amount) {
    if ((amount = 0 && amount <= this.balance)) {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("ไม่สามารถถอนเงินได้");
    }
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      console.log("ไม่สามารถฝากเงินได้");
    }
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
  ATMs = [];
  accounts = [];
  customer = null;
  constructor(name, address, code) {
    this.name = name;
    this.address = address;
    this.code = code;
  }
  createAccount(accountType) {
    var account;
    if (accountType === "current") {
      const account = new CurrentAccount("154-69-8756-2", 10.0, 500000, 0.3);
      return account;
    } else {
      account = new SavingAccount("569-78-3267-9", 200.0, 500000, 0.5);
      return account;
    }
  }
  createATM() {
    const atm = new ATM("Bangkok", "Punsan");
    return atm;
  }
  createCustomer(name, address, phone, email) {
    const customer = new Customer(
      "Vick",
      "NPRU",
      "0922932011",
      "vc123@gmail.com"
    );
    return customer;
  }
  //มันมาได้อย้างไรวะ??
  createTransaction(transaction, type, data, status) {
    const transaction = new Transaction(transaction, type, data, status);
    return transaction;
  }
  //ปิดบัญชีนี่ปิดกันอย่างไร
  closeAccount() {
    const account = new Account("acc", 1000);
    return (account = null);
  }
  //ไม่เข้าใจการเปิดด้วย
  openAccount() {
    const account = new Account("acc", 1000);
    return account != null;
  }
  verify(name) {
    return (this.name = name);
  }
  //อันนี้ทำไรได้
  maintain() {}
  //ให้จัดการอะไรก่อน!!!
  manage() {}
  toString() {
    return `${this.name}`;
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

class CurrentAccount extends Account {
  overdraftLimit = 0.0;
  overdraftInterest = 0.0;
  constructor(accountNumber, balance, overdraftLimit, overdraftInterest) {
    super(accountNumber, balance);
    this.overdraftLimit = overdraftLimit;
    this.overdraftInterest = overdraftInterest;
  }
  getOverdraftLimit() {
    return this.overdraftLimit;
  }
  setOverdraftInterest(amount) {
    this.overdraftLimit = amount;
  }
  calculateInterest() {
    return this.balance * this.overdraftInterest;
  }
}

class SavingAccount extends Account {
  interestRate = 0.0;
  constructor(accountNumber, balance, interestRate) {
    super(balance, accountNumber);
    this.interestRate = interestRate;
  }
  setInterestRate(rate) {
    this.interestRate = rate;
  }
  getInterestRate() {
    return this.interestRate;
  }
  calculateinterest() {
    return this.balance * this.interestRate;
  }
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
  setTransactionDate(transactionDate) {
    this.transactionDate = transactionDate;
  }
  setAmount(amount) {
    this.amount = amount;
  }
  setTransactionType(transactionType) {
    this.transactionDate = transactionType;
  }
  setStatus(status) {
    this.status = status;
  }
  gettransactionDate() {
    return this.transactionDate;
  }
  getAmount() {
    return this.amount;
  }
  gettransactionID() {
    return this.transactionID;
  }
  gettransactionType() {
    return this.transactionType;
  }
  //โชว์ผลลัพธ์
  toString() {
    return `Transaction [ID :${this.transactionID}, Type :${this.transactionType}, Amount :${this.amount}, Date :${this.transactionDate}, Status :${this.status}]`;
  }
}

class ATM {
  location = "";
  managedBy = "";
  customer = null;
  constructor(location, mangedBy) {
    this.location = location;
    this.mangedBy = mangedBy;
  }
  identify() {
    return this.identify;
  }
  checkBalance() {
    return this.balance;
  }
  deposit(amount) {
    if (amount > 0) {
      this.balance += amount;
      return this.balance;
    } else {
      console.log("ไม่สามารถฝากได้");
    }
  }

  withdraw(amount) {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      return this.balance;
    } else {
      console.log("ไม่สามารถถอนได้");
    }
  }
  transfer() {}
  verify(name) {
    return customer.name === name;
  }
  changPin() {
    console.log(0);
    return true;
  }
}
const main = () => {
  const bank1 = new Bank("BankNPRU", "thailand", "725034897502894");
  const customer = bank1.createCustomer(
    "Punsan",
    "BangPhae",
    "0922932011",
    "654259026@gmail.coim"
  );
  const account1 = bank1.createAccount("CurrentAccount");
  const account2 = bank1.createAccount("SavingAccount");

  customer1.addAccount(account1);
  customer1.addAccount(account2);

  account1.deposit(500);
  console.log("Account 1 Balance", account1.getBalance());

  account2.deposit(40000);
  console.log("Account 2 Balance", account2.getBalance());

  const transaction1 = bank1.createTransaction(
    "Transaction1",
    "TransactionType1",
    1500,
    "23/03/2024",
    "Completed"
  );
  console.log(transaction1.toString());

  const atm1 = bank1.createATM("Location1", "Manger1");
  console.log("ATM Location", atm1.location);

  console.log("Change PIN result:", atm1.changPin());
};
main();
